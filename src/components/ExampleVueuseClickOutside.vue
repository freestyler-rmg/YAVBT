<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

const target = useTemplateRef('target');
const ignoreTarget = useTemplateRef('ignoreTarget');
const textDisplay = ref('Waiting for click...');

function onClick() {
  textDisplay.value = 'Button clicked!';
}

onClickOutside(
  target,
  () => {
    textDisplay.value = 'Clicked outside!';
  },
  { ignore: [ignoreTarget] }
);
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <h3 class="uppercase border-b pb-1 mb-4">VueUse On Click Outside</h3>
    <div class="text-center">
      <button
        ref="target"
        class="rounded bg-emerald-700 text-white px-4 py-2 cursor-pointer"
        @click="onClick"
      >
        Click me
      </button>
      <button
        ref="ignoreTarget"
        class="ml-2 rounded bg-gray-500 text-white px-4 py-2 cursor-pointer"
      >
        I'm ignored
      </button>
      <p class="mt-2">{{ textDisplay }}</p>
    </div>
  </div>
</template>
