import Home from '../views/Home.vue'
import Location from '../views/Location.vue'
import Presence from '../views/Presence.vue'
const route = [
    {
        id: '#home-page',
        name: 'home',
        compoment: <Home/>
    },
    {
        id: '#location-start',
        name: 'location',
        compoment: <Location/>
    },
    {
        id: '#confirm-presence',
        name: 'presence',
        compoment: <Presence/>
    }
]
export default route
