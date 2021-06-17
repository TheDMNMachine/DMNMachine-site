import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../src/assets/css/reset.css'
import '../src/assets/css/color.css'
import '../src/assets/css/main.css'

createApp(App).use(router).mount('#app')
