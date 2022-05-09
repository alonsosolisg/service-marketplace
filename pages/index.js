import { Hero } from "@components/ui/common"
import { ServiceList, ServiceCard } from "@components/ui/service"
import { BaseLayout } from "@components/ui/layout"
import { getAllServices } from "@content/services/fetcher"

export default function Home({services}) {
  return (
        <>
          <Hero />
          <ServiceList 
            services={services}
            >
            {service => 
            <ServiceCard 
            key={service.id} 
            service={service} 
            />
            }
          </ServiceList>
        </>
  )
}

export function getStaticProps() {
  const { data } = getAllServices()
  return {
    props: {
      services: data
    }
  }
}

Home.Layout = BaseLayout