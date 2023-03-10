// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/devtools', '@unocss/nuxt', '@vue-macros/nuxt'],
  macros: {},
  css: ['@unocss/reset/tailwind.css', '~/styles/global.css'],
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    // cloudinary
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
  },
  app: {
    keepalive: true,
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico', sizes: 'any' }]
    }
  }
})
