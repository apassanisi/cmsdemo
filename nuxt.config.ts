// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  app: {
    head: {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        { src: 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js' },
      ],
    },
  },
  modules: ['@nuxt/content', 'vuetify-nuxt-module'],
  build: {
    transpile: ['vuetify'],
  },
})