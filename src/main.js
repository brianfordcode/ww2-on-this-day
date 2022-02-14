import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

store.dispatch('loadJSONFiles')
// store.dispatch('getPopDays')

createApp(App).use(store).use(router).mount('#app')