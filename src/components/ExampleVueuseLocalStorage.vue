<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const textInput = ref('');
const isSaved = ref(false);

const storedValue = useLocalStorage('exampleTextInput', '');

function saveToLocalStorage() {
  storedValue.value = textInput.value;
  isSaved.value = true;
}

function removeLocalStorage() {
  localStorage.removeItem('exampleTextInput');
  // Clear the useLocalStorage ref
  // If not cleared, the old value will still be there
  storedValue.value = '';
  textInput.value = '';
  isSaved.value = false;
}

onMounted(() => {
  if (storedValue.value) {
    textInput.value = storedValue.value;
  }
});
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <h3 class="uppercase border-b pb-1 mb-4">VueUse On Click Outside</h3>
    <div class="text-center">
      <input
        v-model="textInput"
        type="text"
        class="border border-gray-300 rounded px-2 py-1 w-80"
      />
      <button
        class="rounded bg-emerald-700 text-white px-4 py-2 cursor-pointer mt-2"
        @click="saveToLocalStorage"
      >
        Save to Local Storage
      </button>
      <br />
      <button
        class="rounded text-sm px-2 py-1 text-red-700 border border-red-700 mt-2"
        @click="removeLocalStorage"
      >
        Remove key from localStorage
      </button>
      <p v-if="isSaved" class="mt-3">
        Try refreshing the page, the input should show the stored value from local storage.
      </p>
    </div>
  </div>
</template>
