<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core';

const currentDate = useNow();
const formattedDate = useDateFormat(currentDate, 'DD MMMM YYYY HH:mm:ss');
const formattedLocaleDate = useDateFormat(currentDate, 'dddd, DD MMMM YYYY', {
  locales: 'de-DE'
});
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <h3 class="border-b pb-1 mb-4">useDateFormat + useNow</h3>
    <div class="text-center">
      <p class="text-sm">Current Date:</p>
      {{ currentDate }}
    </div>

    <div class="text-center mt-3">
      <p class="text-sm">Formatted Date:</p>
      {{ formattedDate }}
    </div>

    <div class="text-center mt-3">
      <p class="text-sm">Formatted Date (Deutsch):</p>
      {{ formattedLocaleDate }}
    </div>
  </div>
</template>
