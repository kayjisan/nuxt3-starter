<template>
  <button @click="mode = mode === 'dark' ? 'light' : 'dark'">
    <SunIcon v-if="mode === 'dark'" class="h-6 w-6" aria-hidden="true" />
    <MoonIcon v-else class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script>
import { useColorMode } from '@vueuse/core'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    MoonIcon,
    SunIcon,
  },

  setup() {
    const mode = useColorMode()

    return {
      mode,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
