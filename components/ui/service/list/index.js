
export default function ServiceList({services, children}) {
    return(
        <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            { services.map((service) => children(service))}
          </section>
    ) 
}