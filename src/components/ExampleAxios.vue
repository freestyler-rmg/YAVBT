<script setup lang="ts">
// 📜 CODE BLOCK - init
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { mediaCheck } from '../utils/ExtensionCheck';
import type { DogApiResponse } from '../types/api';

// 📜 CODE BLOCK - state management example
const dogPicture = ref<string>('');
const isLoading = ref<boolean>(true);
const isRendering = ref<boolean>(true);

const isLoadingMedia = computed(() => isLoading.value || isRendering.value);

const mediaType = computed(() => mediaCheck(dogPicture.value));

function renderingIsDone() {
  isRendering.value = false;
}

onMounted(() => {
  axios
    .get<DogApiResponse>('https://random.dog/woof.json')
    .then((response) => {
      dogPicture.value = response.data.url;
      isLoading.value = false;
    })
    .catch((error) => {
      console.error('Error fetching dog picture:', error);
    });
});
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <h3 class="uppercase border-b pb-1 mb-4">Axios</h3>
    <div class="w-full flex flex-col items-center">
      <div v-if="isLoadingMedia" class="w-full animate-pulse">
        <div class="w-full block h-30 bg-gray-300"></div>
      </div>
      <img
        v-if="mediaType === 'image'"
        v-show="!isLoadingMedia"
        @load="renderingIsDone"
        :src="dogPicture"
        alt="Random dog"
        class="h-40"
      />
      <video
        v-else-if="mediaType === 'video'"
        v-show="!isLoadingMedia"
        @loadeddata="renderingIsDone"
        :src="dogPicture"
        controls
        class="h-40"
        autoplay
      />
    </div>
  </div>
</template>
