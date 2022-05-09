export const createServiceHash = (web3) => (serviceId, account) => {
    const hexServiceId = web3.utils.utf8ToHex(serviceId)
    const serviceHash = web3.utils.soliditySha3(
        { type: "bytes16", value: hexServiceId },
        { type: "address", value: account }
    )

    return serviceHash
}