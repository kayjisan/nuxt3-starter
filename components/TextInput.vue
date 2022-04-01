<template>
  <!-- <div class="text-left">
    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-white">{{ label }}</label> -->
    <div class="mt-1">
      <input
        v-model="inputValue" 
        :id="name"
        :class="class" 
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        @input="handleChange"
        @blur="handleBlur"
      />
      <span 
        v-show="errorMessage || meta.valid"
        class="mt-2 text-sm text-red-600"
      >
        {{ errorMessage }}
      </span>
    </div>
  <!-- </div> -->
</template>

<script>
import { watch } from 'vue'
import { useField } from "vee-validate";

export default {
  props: {
    autocomplete: {
      type: String,
      default: '',
    },
    class: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    // we don't provide any rules here because we are using form-level validation
    // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value, 
      label: props.label,
    });

    watch(() => props.value, (val) => { 
      inputValue.value = val
    })

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>
