import { createServiceHash } from "@utils/hash"
import { normalizeOwnedService } from "@utils/normalize"
import useSWR from "swr"

export const handler = (web3, contract) => (services, account) => {
    const swrRes = useSWR(() => 
        (web3 && 
        contract && 
        account) ? `web3/ownedServices/${account}` : null,
        async () => {
            const ownedServices = []

            for (let i = 0; i < services.length; i++) {
                const service = services[i]

                if (!service.id) { continue }

                const serviceHash =  createServiceHash(web3)(service.id, account)
                const ownedService = await contract.methods.getServiceByHash(serviceHash).call()
                
                if (ownedService.owner !== "0x0000000000000000000000000000000000000000") {
                    const normalized = normalizeOwnedService(web3)(service, ownedService)
                    ownedServices.push(normalized)
                }
            }

            return ownedServices
        }
    )

   return {
    ...swrRes,
    lookup: swrRes.data?.reduce((a, s) => {
      a[s.id] = s
      return a
    }, {}) ?? {}
  }
}