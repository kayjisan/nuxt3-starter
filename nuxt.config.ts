import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  ssr: true,

  buildModules: [
    '@intlify/nuxt3',
    '@pinia/nuxt',
    '@unocss/nuxt',
    'nuxt-lodash',
  ],

  intlify: {
    localeDir: 'locale',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
    }
  },

  // lodash: {
  //   prefix: 'use',
  //   prefixSkip: ['is'],
  //   exclude: ['map'],
  //   alias: [
  //     ['camelCase', 'stringToCamelCase'], // => useStringToCamelCase
  //     ['kebabCase', 'stringToKebabCase'], // => useStringToKebabCase
  //   ]
  // },

  unocss: {
    uno: true,
    // attributify: true,
    icons: true,
    preflight: true,
  },

  publicRuntimeConfig: {
    APP_NAME: process.env.APP_NAME || 'Nuxt3 Starter'
  },

  build: {
    // transpile: ['@headlessui/vue', '@heroicons/vue']
  }
})
