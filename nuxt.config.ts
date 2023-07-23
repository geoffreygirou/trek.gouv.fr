// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
})
