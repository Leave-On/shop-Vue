import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './app/router/router'
import App from './app/App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia()
const vuetify = createVuetify({
  components,
  directives,
})

  const app = createApp(App)
  app.use(pinia)
  app.use(vuetify)
  app.use(router)
  app.mount('#app')
