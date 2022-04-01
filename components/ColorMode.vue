<template>
  <button @click="next()">
    <SunIcon v-if="mode === 'dark'" class="h-6 w-6" aria-hidden="true" />
    <MoonIcon v-if="mode === 'light'" class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script>
import { useColorMode, useCycleList } from '@vueuse/core'
import { MoonIcon, SunIcon } from '@heroicons/vue/outline';

export default {
  components: {
    MoonIcon,
    SunIcon,
  },

  setup() {
    const mode = useColorMode()

    const { next } = useCycleList(['dark', 'light'], { initialValue: mode })

    return {
      mode,
      next
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
