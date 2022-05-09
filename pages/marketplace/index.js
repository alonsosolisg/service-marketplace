import { ServiceCard, ServiceList } from "@components/ui/service"
import { BaseLayout } from "@components/ui/layout"
import { getAllServices } from "@content/services/fetcher"
import { useOwnedServices, useWalletInfo } from "@components/hooks/web3"
import { Button, Loader, Message } from "@components/ui/common"
import { OrderModal } from "@components/ui/order"
import { useState } from "react"
import { MarketHeader } from "@components/ui/marketplace"
import { useWeb3 } from "@components/providers"
import { withToast } from "@utils/toast"

export default function Marketplace({services}) {
  const { web3, contract, requireInstall} = useWeb3()
  const { hasConnectedWallet, isConnecting, account } = useWalletInfo()
  const { ownedServices } = useOwnedServices(services, account.data)
  
  const [selectedService, setSelectedService] = useState(null)
  const [busyServiceId, setBusyServiceId] = useState(null)
  const [isNewPurchase, setIsNewPurchase] = useState(true)

  const purchaseService = async (order, service) => {
    const hexServiceId = web3.utils.utf8ToHex(service.id)
    const orderHash = web3.utils.soliditySha3(
      { type: "bytes16", value: hexServiceId },
      { type: "address", value: account.data }
    )

    const value = web3.utils.toWei(String(order.price))

    setBusyServiceId(service.id)
    if (isNewPurchase) {
      const emailHash = web3.utils.sha3(order.email)
      const proof = web3.utils.soliditySha3(
        { type: "bytes32", value: emailHash },
        { type: "bytes32", value: orderHash }
      )
      
      withToast(_purchaseService({hexServiceId, proof, value}, service))
    } else {
      withToast(_repurchaseService({serviceHash: orderHash, value}, service))
    }
  }

  const _purchaseService = async ({hexServiceId, proof, value}, service) => {
    try {
      const result = await contract.methods.purchaseService(
        hexServiceId,
        proof
      ).send({from: account.data, value})
      
      ownedServices.mutate([
        ...ownedServices.data, {
          ...service,
          proof,
          state: "purchased",
          owner: account.data,
          price: value
        }
      ])
      return result  
    } catch(error) {
      throw new Error(error.message)
    } finally {
      setBusyServiceId(null)
    }
  }

  const _repurchaseService = async ({serviceHash, value}, service) => {
    try {
      const result = await contract.methods.repurchaseService(
        serviceHash
      ).send({from: account.data, value})
      
      const index = ownedServices.data.findIndex(s => s.id === service.id)

      if (index >= 0) {
        ownedServices.data[index].state = "purchased"
        ownedServices.mutate(ownedServices.data)
      } else {
        ownedServices.mutate()
      }
      return result
    } catch(error) {
      throw new Error(error.message)
    } finally {
      setBusyServiceId(null)
    }
  }

  const cleanupModal = () => {
    setSelectedService(null)
    setIsNewPurchase(true)
  }

  return (
        <>
          <MarketHeader />
          <ServiceList 
            services={services}
            >
            {service => {
              const owned = ownedServices.lookup[service.id]
              return (
                <ServiceCard
                  key={service.id} 
                  service={service}
                  state={owned?.state}
                  disabled={!hasConnectedWallet} 
                  Footer={() => {

                    if (requireInstall) {
                      return (
                        <Button
                          size="sm"
                          disabled={true}
                          variant="lightPurple">
                          Install    
                        </Button>
                      )
                    }

                    if (isConnecting) {
                      return (
                        <Button
                          size="sm"
                          disabled={true}
                          variant="lightPurple">
                          <Loader size="sm"/>    
                        </Button>
                    )
                  }

                  if (!ownedServices.hasInitialResponse) {
                    return (
                      // <div style={{height: "42px"}}></div>
                      <Loader size="sm"/>
                    )
                  }

                  const isBusy = busyServiceId === service.id 
                  if (owned) {
                    return (
                      <>
                        <div className="flex">
                          <Button
                            onClick={() => alert("You are owner of this service")}
                            size="sm"
                            disabled={false}
                            variant="white">
                            Yours &#10004;
                          </Button>
                          { owned.state === "deactivated" &&
                            <div className="ml-1">
                              <Button
                                size="sm"
                                disabled={isBusy}
                                onClick={() => {
                                  setIsNewPurchase(false)
                                  setSelectedService(service)
                                }}
                                variant="purple">
                                { isBusy ?
                                  <div className="flex">
                                    <Loader size="sm"/>
                                    <div className="ml-2">In Progress</div>
                                  </div> :
                                    <div>Fund to activate</div>
                                }                              </Button>
                          </div>
                          }
                        </div>
                      </>
                    )
                  }

                    return (
                      <Button
                        size="sm"
                        onClick={() => setSelectedService(service)} 
                        disabled={!hasConnectedWallet || isBusy}
                        variant="lightPurple">
                        { isBusy ?
                        <div className="flex">
                          <Loader size="sm"/>
                          <div className="ml-2">In Progress</div>
                        </div> :
                          <div>Purchase</div>
                        }    
                      </Button>
                    )
                  }
                }
              />
            )}
          }
          </ServiceList>
          { selectedService &&
            <OrderModal 
              service={selectedService}
              isNewPurchase={isNewPurchase}
              onSubmit={(formData, service) => {
                purchaseService(formData, service)
                cleanupModal()
              }}
              onClose={cleanupModal}
            />
          }
        </>
  )
}

export function getStaticProps(){
  const { data } = getAllServices()
  return {
    props: {
      services: data
    }
  }
}

Marketplace.Layout = BaseLayout