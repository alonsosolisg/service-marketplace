export const SERVICE_STATES = {
    0: "purchased",
    1: "activated",
    2: "deactivated"

}

export const normalizeOwnedService = web3 => (service, ownedService) => {
    return {
        ...service,
        ownedServiceId: ownedService.id,
        proof: ownedService.proof,
        owned: ownedService.owner,
        price: web3.utils.fromWei(ownedService.price),
        state: SERVICE_STATES[ownedService.state]
    }
}