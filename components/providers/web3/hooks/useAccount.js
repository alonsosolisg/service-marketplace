import { useEffect } from "react"
import useSWR from "swr"

const adminAdresses = {
    "0x42d5fd8310560fcb542a9e6b908a8913f8ff9ee5c67692f3ce10cbbe145f12ef": true,
    "0x764aa91985e96420344dbcd2be0f8c837b12632f86bfbba02e227863d5c07253": true
}

export const handler = (web3, provider) => () => {

    const { data, mutate, ...rest } = useSWR(() => 
        web3 ? "web3/accounts" : null,
        async () => {
            const accounts = await web3.eth.getAccounts()
            const account = accounts[0]

      if (!account) {
        throw new Error("Cannot retreive an account. Please refresh the browser.")
      }

      return account
        }
    )

    useEffect(() => {
        const mutator = (accounts) => mutate(accounts[0] ?? null)
        provider?.on("accountsChanged", mutator)
    
        return () => {
            provider?.removeListener("accountsChanged", mutator)
        }
    }, [provider]) 

    return { 
        data,
        isAdmin: (data && adminAdresses[web3.utils.keccak256(data)]) ?? false,
        mutate, 
        ...rest
    }
}