// import Vue from 'vue'
import { defineNuxtPlugin } from '#app'
import axios from 'axios';

export default defineNuxtPlugin(async nuxtApp => {
  const config = useRuntimeConfig();

  // axios.defaults.withCredentials = true
  axios.defaults.baseURL = `${config.APP_URL}/api`;
  // axios.defaults.baseURL = 'http://am.test/api';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
})

