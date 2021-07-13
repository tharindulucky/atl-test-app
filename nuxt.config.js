export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'event-reservation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    ['nuxt-leaflet', {}],
    '@nuxtjs/axios',
    ],


  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/login', method: 'post', propertyName: 'data.access_token'},
          logout: false,
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      user: false
    }
  },

  axios: {
    baseURL: "http://127.0.0.1:8000/api"
  },
  toast: {
    position: 'top-right',
    duration: 1000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
