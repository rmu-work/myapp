import '@/plugins/vue-composition-api'
import '@/plugins/components'
import 'vuetify/dist/vuetify.min.css';
import 'tiptap-vuetify/dist/main.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import vueDebounce from 'vue-debounce'
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'

export const bus = new Vue()

Vue.use(vueDebounce)
Vue.use(TiptapVuetifyPlugin, {
        // the next line is important! You need to provide the Vuetify Object to this place.
        vuetify, // same as "vuetify: vuetify"
        // optional, default to 'md' (default vuetify icons before v2.0.0)
        iconsGroup: 'mdi',
    }
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
