<script setup lang="ts">
// 📜 CODE BLOCK - composable example
import { useColorRange } from '../composables/colorRange.ts';
const { rangeMin, rangeMax, colorRed, colorGreen, colorBlue, colorValue } = useColorRange();
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
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
</template>
