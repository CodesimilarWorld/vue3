import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from './Store/index'

const app = createApp(App)

app.use(Store)
app.use(router)
app.mount('#app')
