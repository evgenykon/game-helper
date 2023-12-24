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
  experimental: {
    payloadExtraction: true
  },
  runtimeConfig: {
    public: {
      baseURL: 'https://evgenykon.github.io/game-helper/',
    },
  },
})
