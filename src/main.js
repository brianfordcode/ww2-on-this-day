import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// store.dispatch('getPopDays')

watch(() => store.state.selectedDate, function() {
    store.dispatch('loadJSONFiles')
});


createApp(App).use(store).use(router).mount('#app')