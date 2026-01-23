<script setup lang="ts">
// 📜 CODE BLOCK - init
import { ref, computed } from 'vue';

// 📜 CODE BLOCK - composable example
import { useColorRange } from '../composables/colorRange.ts';
const {
  rangeMin,
  rangeMax,
  colorRed,
  colorGreen,
  colorBlue,
  colorValue
} = useColorRange();
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center">
      <h3 class="uppercase border-b pb-1">Composable</h3>
      <div class="w-2xs rounded p-4 relative mt-4" :style="{ 'background-color': colorValue.bg }">
        <p class="text-lg text-center font-bold" :style="{ color: colorValue.text }">rosebud</p>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <input v-model="colorRed" type="range" :min="rangeMin" :max="rangeMax"  />
        <input v-model="colorGreen" type="range" :min="rangeMin" :max="rangeMax"  />
        <input v-model="colorBlue" type="range" :min="rangeMin" :max="rangeMax"  />
      </div>
    </div>
  </div>
</template>