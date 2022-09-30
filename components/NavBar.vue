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
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="text-indigo-500 flex-shrink-0 flex items-center">{{ config.APP_NAME }}</div>
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
} from '@headlessui/vue'
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    BellIcon,
    Bars3Icon,
    XMarkIcon,
  },

  setup() {
    const config = useRuntimeConfig()

    // Define active route
    const route = useRoute()
    const activeRoute = ref(route.path)

    watch(route, () => {
      activeRoute.value = route.path
    })

    // Navigation
    const navigation = [
      { name: 'Home', to: '/' },
      { name: 'About', to: '/about' },
      { name: 'Pinia', to: '/pinia' },
      { name: 'SignIn', to: '/auth' },
      { name: 'SignUp', to: '/auth/register' },
    ];

    onMounted(() => {
      
    })

    return {
      activeRoute,
      config,
      navigation,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
