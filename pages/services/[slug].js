import { Message, Modal } from "@components/ui/common";
import { ServiceHero, Curriculum, Keypoints } from "@components/ui/service";
import { BaseLayout } from "@components/ui/layout";
import { getAllServices } from "@content/services/fetcher";
import { useAccount, useOwnedService } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";

export default function Service({service}) {
  const { isLoading } = useWeb3()
  const { account } = useAccount()
  const { ownedService } = useOwnedService(service, account.data)
  const serviceState = ownedService.data?.state
  // const serviceState = "activated"


  const isLocked = 
    !serviceState ||
    serviceState === "purchased" || 
    serviceState === "deactivated"

    return (
      <>
        <div className="py-4">
          <ServiceHero
            hasOwner={!!ownedService.data}
            title={service.title}
            description={service.description}
            image={service.coverImage}
          />
        </div>
        <Keypoints
            points={service.wsl}
        />
        { serviceState &&
        <div className="max-w-5xl mx-auto">
          { serviceState == "purchased" &&
              <Message type="warning">
                Service is purchased and waiting for activation. Process can take up to 24h.
                <i className="block font-normal">In case of any questions, please contact test@gmail.com</i>
              </Message>
          }
          { serviceState == "activated" &&
              <Message type="success">
                Ready to provide service for you!
              </Message>
          }
          { serviceState == "deactivated" &&
              <Message type="danger">
                Service has been deactivated due to incorrect purchase data.
                <i className="block font-normal">Please contact test@gmail.com</i>
              </Message>
          }
        </div>

        }
        
        <Curriculum
        isLoading={isLoading}
        locked={isLocked}
        serviceState={serviceState}
        />
        <Modal/>
      </>
    )
  }

  export function getStaticPaths() {
      const { data } = getAllServices()

      return {
          paths: data.map(s => ({
              params: {
                  slug: s.slug
              }
          })),
          fallback: false
      }
  }

  export function getStaticProps({params}) {
    const { data } = getAllServices()
    const service = data.filter(s => s.slug === params.slug)[0]
    return {
      props: {
        service
      }
    }
  }

  Service.Layout = BaseLayout