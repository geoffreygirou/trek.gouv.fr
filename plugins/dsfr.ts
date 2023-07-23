import { defineNuxtPlugin, NuxtApp } from 'nuxt/app'
import VueDsfr from '@gouvminint/vue-dsfr'

// @ts-ignore
export default defineNuxtPlugin((nuxtApp: NuxtApp) =>
  nuxtApp.vueApp.use(VueDsfr),
)
