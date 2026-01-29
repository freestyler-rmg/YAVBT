import { defineStore } from 'pinia';

export const useQuoteStore = defineStore('quote', () => {
  const quote = ref('Yet Another Vue Boilerplate Template');
  const author = ref('By RxMxG');

  return {
    quote,
    author
  };
});
