import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css'
import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'
import 'vue-toastification/dist/index.css'
import Toast, { POSITION } from 'vue-toastification'

const app = createApp(App)
app.use(router)
app.use(Toast, { position: POSITION.BOTTOM_RIGHT })
app.mount('#app')

// createApp(App).use(router).mount('#app')
