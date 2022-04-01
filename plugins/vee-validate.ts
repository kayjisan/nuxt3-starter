import { defineNuxtPlugin } from '#app'
import { defineRule, configure } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
// import { setLocale } from 'yup'

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

// setLocale({
//   // use constant translation keys for messages without values
//   mixed: {
//     default: 'FieldInvalid',
//     required: 'FieldRequired ${path} ',
//     // required: ({ required }) => ({ key: 'FieldRequired2', values: { required } }),
//   },
//   string: {
//     length: ({ length }) => ({ key: 'FieldRequired2', values: { length } }),
//   },
//   // use functions to generate an error object that includes the value from the schema
//   number: {
//     min: ({ min }) => ({ key: 'field_too_short', values: { min } }),
//     max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
//   },
// })
// import { configure } from 'vee-validate'
// import { localize, setLocale } from '@vee-validate/i18n'

// setLocale('de')
// configure({
//   // Generates an English message locale generator
//   generateMessage: localize('de', {
//     messages: {
//       required: 'This field is required',
//     },
//   }),
// })

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(anime2)
  // const { locale } = useI18n()
  // console.log('loc', locale)
})