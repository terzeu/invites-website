import Home from '../views/Home.vue'
import Location from '../views/Location.vue'
import Presence from '../views/Presence.vue'
import Observation from '../views/Observation.vue'
const routes = [
  {
    id: '#home-page',
    name: 'Home',
    compoment: Home,
    headerTitle: 'inicio'
  },
  {
    id: '#location-start',
    name: 'Location',
    compoment: Location,
    headerTitle: 'local'
  },
  {
    id: '#confirm-presence',
    name: 'Presence',
    compoment: Presence,
    headerTitle: 'confirmar presença'
  },
  {
    id: '#obs-start',
    name: 'Observation',
    compoment: Observation,
    headerTitle: 'Observação'
  }
]
let auxComponents = {}
routes.forEach(route => {
  auxComponents[route.name] = route.compoment
})
export const components = auxComponents 
export default routes
