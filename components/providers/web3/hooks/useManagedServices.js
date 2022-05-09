import { normalizeOwnedService } from "@utils/normalize"
import useSWR from "swr"

export const handler = (web3, contract) => account => {

    const swrRes = useSWR(() => 
        (web3 && 
        contract && 
        account.data && account.isAdmin ) ? `web3/managedServices/${account.data}` : null,
        async () => {
            const services = []
      const serviceCount = await contract.methods.getServiceCount().call()

      for (let i = Number(serviceCount) - 1; i >= 0; i--) {
        const serviceHash = await contract.methods.getServiceHashAtIndex(i).call()
        const service = await contract.methods.getServiceByHash(serviceHash).call()

        if (service) {
          const normalized = normalizeOwnedService(web3)({ hash: serviceHash }, service)
          services.push(normalized)
        }
      }

            return services
        }
    )

    return swrRes
}