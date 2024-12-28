export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],

  devtools: { enabled: true },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    '@nuxt/image',
    'nuxt-security',
  ],

  content: {
    highlight: {
      preload: ['nginx'],
    }
  },

  css: ['~/assets/styles/global.css'],

  compatibilityDate: '2024-10-24'
})
