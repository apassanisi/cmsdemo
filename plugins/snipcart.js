import { defineNuxtPlugin } from '#app'
import { createApp } from 'vue'
import { Snipcart } from 'snipcart'

export default defineNuxtPlugin((nuxtApp) => {
  const app = createApp()
  app.component('Snipcart', Snipcart)
  nuxtApp.vueApp.use(app)
})