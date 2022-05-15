
export default {
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3010/graphql',
    DOMAIN: process.env.DOMAIN || 'tiny-bookings.com',
    BRAND: process.env.BRAND || 'tiny-bookings',
    SITE_NAME: process.env.SITE_NAME || 'tiny-bookings',
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    if (!this.$nuxtI18nHead) {
      return
    }
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: process.env.SITE_NAME || 'app',
      titleTemplate: `%s | ${process.env.SITE_NAME}`,
      htmlAttrs: {
        lang: 'en',
        ...i18nHead.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead.link
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/composition-api.js',
    '~/plugins/v-calendar.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],
  // i18n
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es-ES.js',
        name: 'Español',
      },
    ],
    vueI18n: {
      fallbackLocale: 'es'
    },
    defaultLocale: 'es',
    parsePages: false,
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'i18n/',
    baseUrl: `https://${process.env.DOMAIN}`
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      });
    }
  }
}
