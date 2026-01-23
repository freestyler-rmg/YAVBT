import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useQuoteStore = defineStore('quote', () => {
  const quote = ref("Money ain't got no owners, just spenders.");
  const author = ref('Omar Little');

  return {
    quote,
    author
  };
});
