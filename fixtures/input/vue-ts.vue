<template>
  <div>
    <h1 class="px-4 py-4 bg-white mx-1" >{{ greeting }}</h1>
    <button @click="incrementCounter">Click me!
    </button>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script setup lang="ts">
// Define reactive data and props
import { ref } from 'vue';

const greeting = ref('Hello, Vue 3!');
let counter = ref<number  | string>(0);

// Define a function
const incrementCounter = () => {
  counter.value++;
};
</script>
