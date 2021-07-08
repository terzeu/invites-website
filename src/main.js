import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "./assets/app.scss";
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)
app.use(Notifications)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false
app.mount('#app')
