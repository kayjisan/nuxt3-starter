<template>
  <Disclosure as="nav" class="bg-white dark:bg-blue-gray-800 shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-blue-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="text-indigo-500 flex-shrink-0 flex items-center">// Ai Miyamoto</div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              :class="[
                item.to === activeRoute
                  ? 'border-indigo-500 text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300',
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
              ]"
            >{{ $t(item.name) }}</NuxtLink>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Color mode -->
          <ColorMode />

          <!-- Locale dropdown -->
          <Locale />
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <template v-for="item in navigation" :key="item.name">
          <DisclosureButton
            :class="
          item.to === activeRoute
            ? 'bg-indigo-50 dark:bg-blue-gray-700 border-indigo-500 text-indigo-700 dark:text-indigo-500'
            : 'border-transparent text-gray-500 hover:bg-gray-50 dark:hover:bg-blue-gray-700 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-400'"
            class="block w-full border-l-4"
          >
            <NuxtLink
              class="block w-full text-left pl-3 pr-4 py-2 text-base font-medium"
              :to="item.to"
            >{{ $t(item.name) }}</NuxtLink>
          </DisclosureButton>
        </template>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { onMounted } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';

const navigation = [
  { name: 'Home', to: '/' },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    BellIcon,
    MenuIcon,
    XIcon,
  },

  setup() {
    // Define active route
    const route = useRoute()
    const activeRoute = ref(route.path)

    watch(route, () => {
      activeRoute.value = route.path
    })

    // Cookie for cookie consent
    let cookieConsent = useCookie('cookieConsent')

    // Cookie for the user preferences
    const userPreferences = useCookie('userPreferences', { maxAge: 60 * 60 * 24 * 365 })
    // const userPreferences = useCookie('userPreferences', { expires: 'Wed, 31 Oct 2012 00:00:00 UTC' })

    function updateUserPreferences() {
      // Update cookie for the user preferences
      // userPreferences.value = { darkMode, locale }
    }

    function checkCookieConsent() {
      // Update cookie for cookie consent
      cookieConsent = useCookie('cookieConsent')

      // console.log('Check COOKIE CONSENT: ', cookieConsent.value.preferences)
      if (cookieConsent.value !== undefined && cookieConsent.value.preferences) {

        return true
      }

      return false
    }

    // Set default locale
    // const locale = ref('en')
    // const selectedLocale = ref(locales.find(x => x.locale === locale.value))

    // Update dark mode and locale variable, if user preferences are exists
    if (userPreferences.value !== undefined) {
      locale.value = userPreferences.value.locale
    }

    // Set app locale
    // setAppLocale(locale.value, false)

    // function setAppLocale(lang, manuallyTriggered = true) {
    //   // Set application locale
    //   i18n.locale.value = lang
    //   setLocale(lang)

    //   // Update locale variable
    //   locale.value = lang

    //   // Update selected localization
    //   selectedLocale.value = locales.find(x => x.locale === lang)

    //   // Check if cookies for preferences are allowed
    //   if (checkCookieConsent() && manuallyTriggered) {
    //     // Update cookie for the user preferences
    //     updateUserPreferences()
    //   }
    // }

    onMounted(() => {

    })

    return {
      activeRoute,
      navigation,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
