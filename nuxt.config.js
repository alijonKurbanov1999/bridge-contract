import localeEn from './locales/en.json';

require('dotenv').config();

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'bridge-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
    ],
  },
  css: [
    '@/assets/scss/main.scss',
  ],
  plugins: [
    { src: '@plugins/main.js' },
    { src: '@plugins/vee-validate.js' },
    { src: '@plugins/injectComponents.js' },
  ],
  components: true,
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/color-mode',
  ],
  styleResources: {
    scss: ['./assets/scss/resourses.scss'],
  },
  modules: [
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  build: {
    transpile: [
      'vee-validate/dist/rules',
    ],
  },
  // bootstrapVue: {
  //   // bootstrapCSS: false, // Or `css: false`
  //   // bootstrapVueCSS: false, // Or `bvCSS: false`
  //   icons: true,
  // },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      messages: {
        en: localeEn,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    },
  },
  axios: {
    debug: true,
    // proxy: true
  },
  proxy: [
    // Proxies /result to http://176.209.225.53:3000/api
    'http://176.209.225.53:3000/api',
  ],
  env: {
    exampleValue: process.env.EXAMPLE_VALUE
  },
};
