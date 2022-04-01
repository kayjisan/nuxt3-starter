import { defineNuxtPlugin } from '#app'
import { defineRule, configure } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'

import de from '@vee-validate/i18n/dist/locale/de.json'
import en from '@vee-validate/i18n/dist/locale/en.json'
import ja from '@vee-validate/i18n/dist/locale/ja.json'

configure({
  generateMessage: localize({
    en,
    de,
    ja,
  }),
});

defineRule('required', required)
defineRule('email', email)

export default defineNuxtPlugin((nuxtApp) => {

})