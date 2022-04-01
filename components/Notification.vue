<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-10">
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition-group
        enter-active-class="transform ease-out duration-300 delay-300 transition" 
        enter-from-class="translate-y-0 opacity-0 translate-x-4" 
        enter-to-class="translate-y-0 opacity-100 translate-x-0" 
        leave-active-class="transition ease-in duration-500" 
        leave-from-class="opacity-100" 
        leave-to-class="opacity-0"
        move-class="transition duration-500"
      >
        <div 
          v-for="notification in notifications" 
          :key="notification.id" 
          class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon v-if="notification.type === 'success'" class="h-6 w-6 text-green-400" aria-hidden="true" />
                <InformationCircleIcon v-if="notification.type === 'info'" class="h-6 w-6 text-blue-400" aria-hidden="true" />
                <ExclamationCircleIcon v-if="notification.type === 'warning'" class="h-6 w-6 text-yellow-400" aria-hidden="true" />
                <XCircleIcon v-if="notification.type === 'error'" class="h-6 w-6 text-red-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  {{ notification.title }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ notification.text }}
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button @click="remove(notification.id)" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Close</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/vue/outline'
import { XIcon } from '@heroicons/vue/solid'

let count = 0
const generateId = () => {
  return count++
}
const notifications = ref([])

function add (notification, timeout) {
  notifications.value.unshift(notification)

  setTimeout(() => {
    console.log('remove', notification.id)
    remove(notification.id)
  }, timeout)
}

function remove (id) {
  notifications.value.splice(notifications.value.findIndex(n => n.id === id), 1)
}

export const notify = (type, title, text, timeout = 5000) => {
  const notification = {
    id: generateId(),
    type,
    title,
    text,
  }

  add(notification, timeout)
}

export default {
  components: {
    CheckCircleIcon,
    ExclamationCircleIcon, 
    InformationCircleIcon,
    XCircleIcon,
    XIcon,
  },

  setup() {

    return {
      remove,
      notifications,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>