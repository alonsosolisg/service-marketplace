import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";
import { handler as createOwnServicesHook } from "./useOwnedServices"
import { handler as createOwnServiceHook } from "./useOwnedService"
import { handler as createManagedServicesHook } from "./useManagedServices"

export const setupHooks = ({web3, provider, contract}) => {
    return {
        useAccount: createAccountHook(web3, provider),
        useNetwork: createNetworkHook(web3),
        useOwnedServices: createOwnServicesHook(web3, contract),
        useOwnedService: createOwnServiceHook(web3, contract),
        useManagedServices: createManagedServicesHook(web3, contract)


    }
}