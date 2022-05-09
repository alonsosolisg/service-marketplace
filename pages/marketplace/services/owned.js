import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import { OwnedServiceCard } from "@components/ui/service"
import { Button, Message } from "@components/ui/common"
import { useAccount, useOwnedServices } from "@components/hooks/web3"
import { getAllServices } from "@content/services/fetcher"
import { useRouter } from "next/router"
import Link from "next/link"
import { useWeb3 } from "@components/providers"

export default function OwnedServices({services}) {
    const router = useRouter()
    const { requireInstall } = useWeb3()
    const { account } = useAccount()
    const { ownedServices } = useOwnedServices(services, account.data)
    
    return (
        <>
            <MarketHeader />
            <section className="grid grid-cols-1">
                { ownedServices.isEmpty &&
                  <div className="w-1/2">
                    <Message type="warning">
                        <div>You have not purchased any services</div>   
                        <Link href="/marketplace">
                            <a className="font-normal hover:underline">
                                <i>Purchase Service</i>
                            </a>
                        </Link>
                    </Message>  
                  </div>
                }
                { account.isEmpty &&
                    <div className="w-1/2">
                        <Message type="warning">
                            <div>Please connect to Metamask</div>
                        </Message>
                    </div>
                }
                { requireInstall &&
                    <div className="w-1/2">
                        <Message type="warning">
                            <div>Please install Metamask</div>
                        </Message>
                    </div>
                }
                { ownedServices.data?.map(service =>
                    <OwnedServiceCard
                        key={service.id}
                        service={service}
                    >
                        <Button onClick={() => router.push(`/services/${service.slug}`)}>
                            View the service
                        </Button>
                    </OwnedServiceCard>
                )}
            </section>
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

OwnedServices.Layout = BaseLayout