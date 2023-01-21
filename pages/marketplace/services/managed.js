import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";
import { ManagedServiceCard, ServiceFilter } from "@components/ui/service";
import { Button } from "@components/ui/common";
import { useAdmin, useManagedServices } from "@components/hooks/web3";
import { useState } from "react";
import { useWeb3 } from "@components/providers";
import { Message } from "@components/ui/common";
import { normalizeOwnedService } from "@utils/normalize";
import { useEffect } from "react";
import { withToast } from "@utils/toast";

const VerificationInput = ({onVerify}) => {
    const [ email, setEmail ] = useState("")
    return (
        <div className="flex mr-2 relative rounded-md">
            <input
                value={email}
                onChange={({target: {value}}) => setEmail(value)}
                type="text"
                name="account"
                id="account"
                className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                placeholder="0x2341ab..." />
            <Button 
                onClick={() => {
                    onVerify(email)
            }}
            >
                Verify
            </Button>
        </div>
    )
}

export default function MangedServices() {
    const [ proofedOwnership, setProofedOwnership ] = useState({})
    const [ searchedService, setSearchedService ] = useState(null)
    const [ filters, setFilters ] = useState({state: "all"})
    const { web3, contract } = useWeb3()
    const { account } = useAdmin({redirectTo: "/marketplace"})
    const { managedServices } = useManagedServices(account)

    const verifyService = (email, {hash, proof}) => {
        if (!email) {
            return
        }
        
        const emailHash = web3.utils.sha3(email)
        const proofToCheck = web3.utils.soliditySha3(
            { type: "bytes32", value: emailHash },
            { type: "bytes32", value: hash },
        )

        proofToCheck === proof ?
            setProofedOwnership({
                ...proofedOwnership,
                [hash]: true
            }) :
            setProofedOwnership({
                ...proofedOwnership,
                [hash]: false
            })
    }

    const changeServiceState = async (serviceHash, method) => {
        try {
            const result = await contract.methods[method](serviceHash)
            .send({
                from: account.data
            })
          return result
        } catch(e) {
            throw new Error(e.message)
        }
    }

    const activateService = async serviceHash => {
        withToast(changeServiceState(serviceHash, "activateService"))
    }

    const deactivateService = async serviceHash => {
        withToast(changeServiceState(serviceHash, "deactivateService"))
    }

    useEffect(() => {
        console.log(searchedService)
    }, [searchedService])

    const searchService = async hash => {
        var re = /[0-9A-Fa-f]{6}/g;

        if(hash && hash.length === 66 && re.test(hash)) {
            const service = await contract.methods.getServiceByHash(hash).call()
            if (service.owner !== "0x0000000000000000000000000000000000000000") {
                const normalized = normalizeOwnedService(web3)({hash}, service)
                setSearchedService(normalized)
                return
            }
        }
        setSearchedService(null)
    }

    const renderCard = (service, isSearched) => {
        return (
            <ManagedServiceCard 
                key={service.ownedServiceId}
                isSearched={isSearched}
                service={service}
                >
                <VerificationInput
                    onVerify={email => {
                        verifyService(email, {hash: service.hash, proof: service.proof})
                    }} 
                />
                { proofedOwnership[service.hash] &&
                    <div className="mt-2">
                        <Message>
                            Verified!
                        </Message>
                    </div>
                }
                { proofedOwnership[service.hash] == false &&
                    <div className="mt-2">
                        <Message type="danger">
                            Wrong Poof!
                        </Message>
                    </div>
                }
                { service.state === "purchased" &&
                    <div className="mt-2">
                        <Button 
                            onClick={() => activateService(service.hash)}
                            variant="green">
                            Activate
                        </Button>
                        <Button 
                            onClick={() => deactivateService(service.hash)}
                            variant="red">
                            Deactivate
                        </Button>
                    </div>
                }   
            </ManagedServiceCard>
        )
    }

    if (!account.isAdmin) {
        return null
    }

    const filteredServices = managedServices.data
        ?.filter((service) => {
            if (filters.state === "all") {
                return true
            }

            return service.state === filters.state
        })
        ?.map(service => renderCard(service))

    return (
        <>
            <MarketHeader />
            <ServiceFilter 
                onFilterSelect={(value) => setFilters({state: value})}
                onSearchSubmit={searchService}
            />
            <section className="grid grid-cols-1">
                { searchedService &&
                    <div>
                        <h1 className="text-2xl font-bold p-5">Search</h1>

                        { renderCard(searchedService, true) }
                    </div>
                }
                <h1 className="text-2xl font-bold p-5">All Services</h1>
                { filteredServices }
                { filteredServices?.length === 0 && 
                    <Message type="warning">
                        No services to display
                    </Message>
                }
            </section>
        </>
    )
}

MangedServices.Layout = BaseLayout