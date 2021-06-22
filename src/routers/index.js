import Home from '../views/Home.vue'
import Location from '../views/Location.vue'
import Presence from '../views/Presence.vue'
const routes = [
    {
        path: '/home-page',
        id: '#home-page',
        name: 'home',
        compoment: Home
    },
    {
        path: '/location-start',
        id: '#location-start',
        name: 'location',
        compoment: Location
    },
    {
        path: '/confirm-presence',
        id: '#confirm-presence',
        name: 'presence',
        compoment: Presence
    }
]
export default routes
