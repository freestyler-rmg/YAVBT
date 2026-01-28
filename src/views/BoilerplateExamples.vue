<script setup lang="ts">
// 📜 CODE BLOCK - init
import ExampleComposable from '../components/ExampleComposable.vue';
import ExampleStateManagement from '../components/ExampleStateManagement.vue';
import ExampleAxios from '../components/ExampleAxios.vue';
import ExampleVueuseClickOutside from '@/components/ExampleVueuseClickOutside.vue';
import ExampleVueuseLocalStorage from '@/components/ExampleVueuseLocalStorage.vue';
import { useDefaultHead } from '../composables/useDefaultHead';

useDefaultHead({
  siteName: 'Boilerplate Examples'
});
</script>

<template>
  <div class="min-h-screen p-4">
    <div class="grid grid-flow-row grid-cols-[repeat(auto-fit,360px)] gap-4 justify-center">
      <ExampleComposable />

      <ExampleStateManagement />

      <ExampleAxios />

      <ExampleVueuseClickOutside />

      <ExampleVueuseLocalStorage />
    </div>
    <div class="mt-4">
      <RouterLink
        to="/"
        class="px-4 py-2 text-blue-500 rounded w-full inline-block text-center border border-blue-300"
        >Go Back</RouterLink
      >
    </div>
  </div>
</template>
