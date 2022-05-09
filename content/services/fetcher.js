
import services from "./index.json"
export const getAllServices = () => {
    return {
        data: services,
        serviceMap: services.reduce((a, s, i) => { 
            a[s.id] = s
            a[s.id].index = i
            return a
        }, {})
    }
}