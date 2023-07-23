// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  css: ['@gouvfr/dsfr/dist/dsfr.min.css', '@gouvminint/vue-dsfr/styles'],
  components: [
    {
      path: '~/components',
      global: true,
      pathPrefix: false,
    },
    {
      path: '~/layouts',
      global: true,
      pathPrefix: false,
    },
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
