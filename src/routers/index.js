import Home from '../views/Home.vue'
import Location from '../views/Location.vue'
import Presence from '../views/Presence.vue'
const routes = [
  {
    id: '#home-page',
    name: 'home',
    compoment: <Home/>,
    headerTitle: 'inicio'
  },
  {
    id: '#location-start',
    name: 'location',
    compoment: <Location/>,
    headerTitle: 'local'
  },
  {
    id: '#confirm-presence',
    name: 'presence',
    compoment: <Presence/>,
    headerTitle: 'confirmar presença'
  }
]
export default routes
