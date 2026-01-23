<script setup lang="ts">
// 📜 CODE BLOCK - init
import { ref, computed } from 'vue';

// 📜 CODE BLOCK - composable example
import { useColorRange } from '../composables/colorRange.ts';
const { rangeMin, rangeMax, colorRed, colorGreen, colorBlue, colorValue } = useColorRange();

// 📜 CODE BLOCK - state management example
import { useQuoteStore } from '../stores/quote';
const quoteStore = useQuoteStore();
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen gap-4 p-4">
    <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center">
      <h3 class="uppercase border-b pb-1 mb-4">Composable</h3>
      <div class="w-2xs rounded p-4 relative" :style="{ 'background-color': colorValue.bg }">
        <p class="text-lg text-center font-bold" :style="{ color: colorValue.text }">rosebud</p>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <input v-model="colorRed" type="range" :min="rangeMin" :max="rangeMax" />
        <input v-model="colorGreen" type="range" :min="rangeMin" :max="rangeMax" />
        <input v-model="colorBlue" type="range" :min="rangeMin" :max="rangeMax" />
      </div>
    </div>

    <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center">
      <h3 class="uppercase border-b pb-1 mb-4">State Management</h3>
      <div>
        <input
          v-model="quoteStore.quote"
          type="text"
          class="border border-gray-300 rounded px-2 py-1 w-80"
        />
        <input
          v-model="quoteStore.author"
          type="text"
          class="border border-gray-300 rounded px-2 py-1 w-80 mt-2"
        />
      </div>
    </div>

    <RouterLink to="/" class="mt-8 bg-gray-50 px-4 py-2 text-blue-500 rounded">Go Back</RouterLink>
  </div>
</template>
