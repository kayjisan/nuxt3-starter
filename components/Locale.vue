<template>
  <Menu as="div" class="ml-3 relative z-1">
    <div>
      <MenuButton
        class="rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-4 dark:focus:ring-offset-blue-gray-800 focus:ring-indigo-500"
      >
        <span class="sr-only">Open user menu</span>
        <div :class="`${selectedLocale.icon}  text-2xl`" />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        v-model="$i18n.locale"
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-blue-gray-900 ring-1 ring-black dark:ring-gray-600 ring-opacity-5 focus:outline-none"
      >
        <MenuItem v-for="item in locales" :key="item.locale" v-slot="{ active }">
          <a
            @click="setAppLocale(item.locale)"
            href="#"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700 dark:text-white',
            ]"
          >{{ $t(item.name) }}</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { usePreferredLanguages } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@vee-validate/i18n'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

export default {
  components: {
    Menu, 
    MenuButton, 
    MenuItem, 
    MenuItems,
  },

  setup() {
    const i18n = useI18n()

    const prefLanguages = usePreferredLanguages()

    const locale = ref(i18n.locale.value)
    const locales = [
      { locale: 'en', name: 'English', icon: 'i-circle-flags-gb' },
      { locale: 'de', name: 'German', icon: 'i-circle-flags-de' },
      { locale: 'ja', name: 'Japanese', icon: 'i-circle-flags-jp' },
    ];

    const selectedLocale = ref('')

    // Set app language based on preferred language
    setAppLocale(getPreferredLocale())

    function setAppLocale(lang) {
      // Set i18n locale
      i18n.locale.value = lang

      // Set vee-validate locale
      setLocale(lang)

      // Update locale variable
      locale.value = lang

      // Update selected localization
      selectedLocale.value = locales.find(x => x.locale === lang)
    }

    function getPreferredLocale() {
      let prefLang = null

      // Loop trough preferred browser languages
      useForEach(prefLanguages.value, (lang) => {
        // Check if an preferred language is supported
        const language = useFind(i18n.availableLocales, (val) => { return val === lang.substring(0, 2) })
        
        if (language !== undefined) {
          // Set preferred language
          prefLang = language

          // End loop
          return false
        }
      })

      if (prefLang !== null) {
        return prefLang
      }

      // Return default language
      return i18n.locale.value
    }

    return {
      locale,
      locales,
      selectedLocale,
      setAppLocale,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
