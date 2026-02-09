import { defineStore } from 'pinia';

export const useQuoteStore = defineStore('quote', () => {
  const quote = ref('Yet Another Vue 3 Boilerplate Template');
  const author = ref('By Roy Margasa');

  return {
    quote,
    author
  };
});
