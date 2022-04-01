<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">{{ $t('SignInAccount') }}</h2>
      <p class="mt-2 text-center text-sm text-gray-600"></p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white dark:bg-blue-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Form @submit="onSubmit" :validation-schema="schema" class="space-y-6">
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 dark:text-white"
            >{{ $t('Email') }}</label>
            <div class="mt-1">
              <text-input
                class="appearance-none block w-full px-3 py-2 border dark:bg-blue-gray-900 border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="email"
                type="email"
                autocomplete="email"
                :label="$t('Email')"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 dark:text-white"
            >{{ $t('Password') }}</label>
            <div class="mt-1">
              <text-input
                class="appearance-none block w-full px-3 py-2 border dark:bg-blue-gray-900 border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="password"
                type="password"
                autocomplete="password"
                :label="$t('Password')"
              />
            </div>
          </div>

          <div>
            <label
              for="password_confirmation"
              class="block text-sm font-medium text-gray-700 dark:text-white"
            >{{ $t('PasswordConfirmation') }}</label>
            <div class="mt-1">
              <text-input
                class="appearance-none block w-full px-3 py-2 border dark:bg-blue-gray-900 border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="confirm_password"
                type="password"
                autocomplete="confirm-password"
                :label="$t('Password')"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >{{ $t('SignUp') }}</button>
          </div>
        </Form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span
                class="px-2 bg-white dark:bg-blue-gray-800 text-gray-500 dark:text-white"
              >{{ $t('OrContinueWith') }}</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <div v-for="provider in OAuthProviders" :key="provider.name">
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 dark:bg-blue-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">{{ $t(provider.name) }}</span>
                <div :class="`${provider.icon} text-xl`" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import { object, string, ref } from 'yup'

definePageMeta({
  // layout: 'default',
});

export default {
  components: {
    Form,
  },

  setup() {

    // Define a validation schema
    // const schema = object().shape({
    //   email: string().required().email(),
    //   password: string().required().min(8),
    //   confirm_password: string().required().oneOf([ref('password')], 'Passwords must match'),
    // })
    const schema = {
      email: 'required|email',
      password: 'required|min:8',
      confirm_password: 'required|min:8|confirmed:@password',
    }

    function onSubmit(values, { resetForm }) {
      console.log('SUBMIT ', values)

      resetForm()
    }

    const OAuthProviders = [{
      name: 'SignInWithApple',
      icon: 'i-fa6-brands-apple',
    }, {
      name: 'SignInWithGitHub',
      icon: 'i-fa6-brands-github',
    }, {
      name: 'SignInWithGoogle',
      icon: 'i-fa6-brands-google',
    }]

    return {
      schema,
      onSubmit,
      OAuthProviders,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>