export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],

  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    'nuxt-security',
  ],

  content: {
    highlight: {
      preload: ['nginx'],
    }
  },

  nitro: {
    preset: 'bun',
  },

  css: ['~/assets/styles/global.css'],

  compatibilityDate: '2024-10-24'
})
