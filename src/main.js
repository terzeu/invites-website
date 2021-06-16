import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "./assets/app.scss";

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false
app.mount('#app')
