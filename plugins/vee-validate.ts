import { defineNuxtPlugin } from '#app'
import { defineRule, configure } from 'vee-validate'
import { required, confirmed, email, min } from '@vee-validate/rules'
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
defineRule('confirmed', confirmed)
defineRule('email', email)
defineRule('min', min)

export default defineNuxtPlugin((nuxtApp) => {

})