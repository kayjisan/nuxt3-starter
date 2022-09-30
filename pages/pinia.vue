<template>
    <div>  
      <p class="py-2">
        This is an example store to test out devtools. Try one of the following with the devtools open:
        <br />
      </p>
  
      <ul class="list-disc list-inside">
        <li>Use the different increment actions</li>
        <li>Change the counter directly from the devtools</li>
        <li>Use decrement to zero to see how action groups work</li>
        <li>
          Click
          <b>Test Errors</b> and immediately after
          <b>increment</b> the store
        </li>
        <li>While the dev server is running, try changing counter.changeMe, adding, and removing new state properties</li>
      </ul>
  
      <h2 class="mt-6 text-xl font-extrabold text-gray-900 dark:text-white">Counter Store</h2>
  
      <p class="py-2" data-testid="counter-values">Counter: {{ counter.n }}. Double: {{ counter.double }}</p>
  
      <p class="py-2">Increment the Store:</p>
  
      <button 
        class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="counter.increment()" data-testid="increment"
      >+1</button>
      <button 
        class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="counter.increment(10)"
      >+10</button>
      <button 
        class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="counter.increment(100)"
      >+100</button>
      <button 
        class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="counter.n++"
      >Direct Increment</button>
      <button
        class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="
          counter.$patch((state) => {
            state.n++
            state.incrementedTimes++
          })
        "
      >Direct patch</button>
  
      <p class="py-2">Other actions:</p>
  
      <button 
        class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="counter.fail"
      >Test Errors</button>
      <button 
        class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="counter.decrementToZero()"
      >Decrement to zero</button>
      <button 
        class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="counter.changeMe()"
      >
        <code>counter.changeMe()</code>
      </button>
  
      <p class="pb-3"></p>

      <hr />
  
      <p class="pt-3">
        Complete store state via
        <code>store.$state</code>:
      </p>
  
      <pre>{{ counter.$state }}</pre>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useCounter } from "~/stores/counter";
  
  const counter = useCounter()
  
  // if (process.server) {
  //   counter.n = 20
  // }
  </script>
  
  <style scoped>
  button {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  </style>
  