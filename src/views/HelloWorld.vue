<script setup lang="ts">
// 📜 CODE BLOCK - init
import SimpleProp from '../components/SimpleProp.vue';
import SimpleNamedSlot from '../components/SimpleNamedSlot.vue';
import { useQuoteStore } from '../stores/quote';
const quoteStore = useQuoteStore();

// 📜 CODE BLOCK - head content
import { useDefaultHead } from '../composables/useDefaultHead';

useDefaultHead({
  siteName: 'Yet Another Vue Boilerplate Template'
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen bg-linear-to-r from-gray-950 to-blue-600 p-3"
  >
    <simple-prop msg="YAVBT v0.5.0" />
    <simple-named-slot class="text-center">
      {{ quoteStore.quote }}
      <template v-slot:subtitle>{{ quoteStore.author }}</template>
    </simple-named-slot>
    <router-link to="/boilerplate-examples" class="mt-8 bg-gray-50 px-4 py-2 text-blue-500 rounded"
      >Boilerplate and Examples</router-link
    >
  </div>
</template>
