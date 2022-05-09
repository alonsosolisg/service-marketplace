import { createServiceHash } from "@utils/hash"
import { normalizeOwnedService } from "@utils/normalize"
import useSWR from "swr"

export const handler = (web3, contract) => (service, account) => {
    const swrRes = useSWR(() => 
        (web3 && contract && account) ? `web3/ownedService/${account}` : null,
        async () => {

            const serviceHash = createServiceHash(web3)(service.id, account)

            const ownedService = await contract.methods.getServiceByHash(serviceHash).call()
            if (ownedService.owner == "0x0000000000000000000000000000000000000000") {
                return null
            }

            return normalizeOwnedService(web3)(service, ownedService)
        }
    )
    return swrRes
}