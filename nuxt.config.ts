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
      baseURL: '/game-helper/',
    },
  },
  app: {
    baseURL: '/game-helper/',
    head: {
      title: 'Game Helper',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Game Helper: Monopoly' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' }
      ]
    },
  },
})
