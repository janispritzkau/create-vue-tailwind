<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <h1
    class="mx-auto mt-8 max-w-max bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-center text-2xl font-bold text-transparent dark:from-emerald-400 dark:to-cyan-500">
    Vue Tailwind
  </h1>
  <p class="mt-4 text-center text-gray-600">A project starter template</p>
  <button
    @click="count++"
    class="mx-auto mt-8 flex rounded-md border border-gray-300 px-3 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-100 active:bg-gray-200">
    Clicked {{ count }} times
  </button>
</template>
