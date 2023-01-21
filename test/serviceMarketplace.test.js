const ServiceMarketplace = artifacts.require("ServiceMarketplace")
const { catchRevert } = require("./utils/exceptions")

const getBalance = async address => web3.eth.getBalance(address)
const toBN = value => web3.utils.toBN(value)

const getGas = async result => {
    const tx = await web3.eth.getTransaction(result.tx)    
    const gasUsed = toBN(result.receipt.gasUsed)
    const gasPrice = toBN(tx.gasPrice)
    const gas = gasUsed.mul(gasPrice)

    return gas
}

contract("ServiceMarketplace", accounts => {

    const serviceId = "0x00000000000000000000000000003130"
    const proof = "0x0000000000000000000000000000313000000000000000000000000000003130"
    
    const serviceId2 = "0x00000000000000000000000000002130"
    const proof2 = "0x0000000000000000000000000000213000000000000000000000000000002130"
    
    const value = "900000000"

    let _contract = null
    let contractOwner = null
    let buyer = null
    let serviceHash = null
    
    before(async () => {
        _contract = await ServiceMarketplace.deployed()
        contractOwner = accounts[0]
        buyer = accounts[1]

    })

    describe("Purchase the new service", () => {

        before(async() => {
            await _contract.purchaseService(serviceId, proof, {
                from: buyer,
                value
            })
        })

        it ("should not allow to repurchase already owned service", async () => {
            await catchRevert(_contract.purchaseService(serviceId, proof, {
                from:buyer,
                value
            }))
        })

        it("can get the purchased service hash by its index", async () => {
            const index = 0
            serviceHash = await _contract.getServiceHashAtIndex(index)

            const expectedHash = web3.utils.soliditySha3(
                {type: "bytes16", value: serviceId},
                {type: "address", value: buyer},
            )

            assert.equal(serviceHash, expectedHash, "Service hash is not matching the purchased service")
        })

        it("should match the purchased data of the service", async () => {
            const expectedIndex = 0
            const expectedState = 0
            const service = await _contract.getServiceByHash(serviceHash)

            assert.equal(service.id, expectedIndex, "Service index should be 0!")
            assert.equal(service.price, value, `Service price should be ${value}!`)
            assert.equal(service.proof, proof, `Service price should be ${proof}!`)
            assert.equal(service.owner, buyer, `Service buyer should be ${buyer}!`)
            assert.equal(service.state, expectedState, `Service state should be ${expectedState}!`)
        })
    })

    describe("Activate purchased service", () => {
        
        it ("should not be able to activate service other than contract owner", async () => {
            await catchRevert(_contract.activateService(serviceHash, {from: buyer}))
            
        })

        it("should have ACTIVATED status", async () => {
            await _contract.activateService(serviceHash, {from: contractOwner})
            const service = await _contract.getServiceByHash(serviceHash)
            const expectedState = 1

            assert.equal(service.state, expectedState, "service should have activated state")
        })
    })

    describe("Transfer ownership", () => {
        let currentOwner = null      
        before(async() => {
            currentOwner = await _contract.getContractOwner()
        })

        it ("getContractOwner should return deployer address", async () => {
            assert.equal(
                contractOwner, 
                currentOwner, 
                "Contract owner is not matching the one from getContractOwner function"
                )
        })
        it ("should not transfer ownership when contract owner is not sending transaction", async () => {
            await catchRevert(_contract.transferOwnership(accounts[3], {from : accounts[4]}))
        })
        
        it ("should transfer ownership to 3rd address from 'accounts'", async () => {
            await _contract.transferOwnership(accounts[2], {from : contractOwner})
            const owner = await _contract.getContractOwner()
            assert.equal(owner, accounts[2], "contract owner is not the second account")

        })
        
        it ("should transfer ownership back to initial contract owner", async () => {
            await _contract.transferOwnership(contractOwner, {from : accounts[2]})
            const owner = await _contract.getContractOwner()
            assert.equal(owner, contractOwner, "contract owner is not set")

        })
    })

    describe("Deactivate service", () => {
        let serviceHash2 = null
        let currentOwner = null

        before(async () => {
            await _contract.purchaseService(serviceId2, proof2, {from: buyer, value})
            serviceHash2 = await _contract.getServiceHashAtIndex(1)
            currentOwner = await _contract.getContractOwner()
        })

        it("should NOT be able to deactivate the service by other than contract owner", async () => {
            await catchRevert(_contract.deactivateService(serviceHash2,{from: buyer}))
        })

        it("should have status of deactivated and price 0", async () => {
            const beforeTxBuyerBalance = await getBalance(buyer)
            const beforeTxContractBalance = await getBalance(_contract.address)
            const beforeTxOwnerBalance = await getBalance(currentOwner)

            const result = await _contract.deactivateService(serviceHash2, {from: contractOwner})

            const afterTxBuyerBalance = await getBalance(buyer)
            const afterTxContractBalance = await getBalance(_contract.address)
            const afterTxOwnerBalance = await getBalance(currentOwner)

            const service = await _contract.getServiceByHash(serviceHash2)
            const expectedState = 2
            const expectedPrice = 0
            const gas = await getGas(result)

            assert.equal(service.state, expectedState, "service is not deactivated")
            assert.equal(service.price, expectedPrice, "service price is not 0")

            assert.equal(
                toBN(beforeTxOwnerBalance).sub(gas).toString(),
                afterTxOwnerBalance,
                "Contract owner balance is not correct"
                )

            assert.equal(
                toBN(beforeTxBuyerBalance).add(toBN(value)).toString(),
                afterTxBuyerBalance,
                "Buyer balance is not correct"
                )

            assert.equal(
                toBN(beforeTxContractBalance).sub(toBN(value)).toString(),
                afterTxContractBalance,
                "Contract balance is not correct"
                )

        })
        
        it("should not be able to activate deactivated service", async () => {
            await catchRevert(_contract.activateService(serviceHash2,{from: contractOwner}))
        })

    })

    describe("Repurchase service", () => {
        let serviceHash2 = null

        before(async () => {
            serviceHash2 = await _contract.getServiceHashAtIndex(1)
        })

        it("should not repurchase when service doesn't exist", async () => {
            const notExistingHash = "0x4b67ff41c48c1d5b9944c233b53b4f60c5a89c08c1c7547b8b97f0a5b2b2f230"
            await catchRevert(_contract.repurchaseService(notExistingHash, {from: buyer}))
        } )

        it("should not repurchase without service owner", async () => {
            const notOwnerAddress = accounts[2]
            await catchRevert(_contract.repurchaseService(serviceHash2, {from: notOwnerAddress}))
        } )

        it("should be able repurchase with the original buyer", async () => {
            const beforeTxBuyerBalance = await getBalance(buyer)
            const beforeTxContractBalance = await getBalance(_contract.address)

            const result = await _contract.repurchaseService(serviceHash2, {from: buyer, value})

            const afterTxBuyerBalance = await getBalance(buyer)
            const afterTxContractBalance = await getBalance(_contract.address)
            
            const service = await _contract.getServiceByHash(serviceHash2)
            const expectedState = 0
            const gas = await getGas(result)

            assert.equal(service.state, expectedState, "service is not purchased")
            assert.equal(service.price, value, `Service price is not equal to ${value}!`)

            assert.equal(
                toBN(beforeTxBuyerBalance).sub(toBN(value)).sub(gas).toString(),
                afterTxBuyerBalance,
                "Client balance is not correct"
            )
            
            assert.equal(
                toBN(beforeTxContractBalance).add(toBN(value)).toString(),
                afterTxContractBalance,
                "Contract balance is not correct"
            )
        } )

        it("should not be able to repurchase purchased service", async () => {
            await catchRevert(_contract.repurchaseService(serviceHash2, {from: buyer}))
        } )
    })

    describe("Receive funds", () => {
        it("Should have transacted funds", async () => {
            const value = "100000000000000000"
            const contractBeforeTx = await getBalance(_contract.address)

            await web3.eth.sendTransaction({
               from: buyer, 
               to: _contract.address,
               value
            })
            
            const contractAfterTx = await getBalance(_contract.address)

            assert.equal(
                toBN(contractBeforeTx).add(toBN(value)).toString(),
                contractAfterTx,
                "Value after TX is not matching"
            )            
        })
    })

    describe("Normal withdraw", () => {
        const fundsToDeposit = "100000000000000000"
        const overLimitFunds = "999999000000000000000"
        let currentOwner = null

        before(async () => {
            currentOwner = await _contract.getContractOwner()
            await web3.eth.sendTransaction({
                from: buyer, 
                to: _contract.address,
                value: fundsToDeposit
             })
        })
   
        it("Should fail when withdrawing with other than owner", async () => {
            const value = "10000000000000000"
            await catchRevert(_contract.withdraw(value, {from: buyer}))
        })
   
        it("Should fail when withdrawing over limit funds", async () => {
            await catchRevert(_contract.withdraw(overLimitFunds, {from: currentOwner}))
        })

        it("Should have .1 more eth after withdraw", async () => {
            const ownerBalance = await getBalance(currentOwner)
            const result = await _contract.withdraw(fundsToDeposit, {from: currentOwner})
            const newOwnerBalance = await getBalance(currentOwner)
            const gas = await getGas(result)

             assert.equal(
                 toBN(ownerBalance).add(toBN(fundsToDeposit)).sub(gas).toString(),
                 newOwnerBalance,
                 "The new owner balance is not correct"
             )
        })
    })

    describe("Emergency Withdraw", () => {
        let currentOwner;

        before(async () => {
            currentOwner = await _contract.getContractOwner()
        })

        after(async () => {
            await _contract.resumeContract({from: currentOwner})
        })

        it("Should fail when contract is not stopped", async () => {
            await catchRevert(_contract.emergencyWithdraw({from: currentOwner}))
        })

        it("Should have more contract funds on contract owner", async () => {
            await _contract.stopContract({from: contractOwner})

            const contractBalance = await getBalance(_contract.address)
            const ownerBalance = await getBalance(currentOwner)

            const result = await _contract.emergencyWithdraw({from: currentOwner})
            const gas = await getGas(result)

            const newOwnerBalance = await getBalance(currentOwner)

            assert.equal(
                toBN(ownerBalance).add(toBN(contractBalance)).sub(gas),
                newOwnerBalance,
                "Owner doesn't have contract balance"
            )
        })

        it("Should have contract balance of 0", async () => {
            const contractBalance = await getBalance(_contract.address)

            assert.equal(
                contractBalance,
                0,
                "Contract doesn't have 0 balance"
            )
        })
    })

    describe("Self Destruct", () => {
        let currentOwner;

        before(async () => {
            currentOwner = await _contract.getContractOwner()
        })

        it("Should fail when contract is not stopped", async () => {
            await catchRevert(_contract.selfDestruct({from: currentOwner}))
        })

        it("Should have more contract funds on contract owner", async () => {
            await _contract.stopContract({from: contractOwner})

            const contractBalance = await getBalance(_contract.address)
            const ownerBalance = await getBalance(currentOwner)

            const result = await _contract.selfDestruct({from: currentOwner})
            const gas = await getGas(result)

            const newOwnerBalance = await getBalance(currentOwner)

            assert.equal(
                toBN(ownerBalance).add(toBN(contractBalance)).sub(gas),
                newOwnerBalance,
                "Owner doesn't have contract balance"
            )
        })

        it("Should have contract balance of 0", async () => {
            const contractBalance = await getBalance(_contract.address)

            assert.equal(
                contractBalance,
                0,
                "Contract doesn't have 0 balance"
            )
        })

        it("Should have 0x bytecode", async () => {
            const code = await web3.eth.getCode(_contract.address)

            assert.equal(
                code,
                "0x",
                "Contract not destroyed"
            )
        })
    })

})