import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@intlify/nuxt3',
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

    unocss: {
        uno: true,
        // attributify: true,
        icons: true,
        preflight: true,
    },

    publicRuntimeConfig: {
        APP_NAME: process.env.APP_NAME || 'Nuxt3 Starter'
    }
})
