<template>
  <div class="min-h-screen dark:color-white dark:bg-blue-gray-900">
    <NavBar />

    <main class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="py-6">
        <slot />
      </div>
    </main>

    <Notification />
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'
export default {
  setup() {

    onMounted(() => {
      console.log('WINDOW: ', window)
      console.log('WINDOW OPENER: ', window.opener)
    })

    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>