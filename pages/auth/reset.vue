<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">{{ $t('ResetYourPassword') }}</h2>
      <p class="mt-2 text-center text-sm text-gray-600 dark:text-white">

      </p>
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
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >{{ $t('ResetYourPassword') }}</button>
          </div>
        </Form>
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
    // })
    const schema = {
      email: 'required|email',
    }

    function onSubmit(values, { resetForm }) {
      console.log('SUBMIT ', values)

      resetForm()
    }

    return {
      schema,
      onSubmit,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>