// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // Generated at build time for SEO purpose
    '/': {prerender: true},
    // Cached for 1 hour
    '/api/*': {cache: {maxAge: 60 * 60}},
  },
  modules: ['@nuxt/ui', ],
  devServer: {
    host: '0.0.0.0'
  },
  app: {
    baseURL: "/game-helper/"
  },

})
