import { ref, computed } from 'vue';

// by convention, composable function names start with "use"
export function useColorRange() {
  const rangeMin = ref<number>(0);
  const rangeMax = ref<number>(255);
  const colorRed = ref<number>(Math.random() * (rangeMax.value - rangeMin.value) +  rangeMin.value);
  const colorGreen = ref<number>(Math.random() * (rangeMax.value - rangeMin.value) +  rangeMin.value);
  const colorBlue = ref<number>(Math.random() * (rangeMax.value - rangeMin.value) +  rangeMin.value);

  const colorValue = computed(() => {
    return {
      text: `rgb(${colorRed.value}, ${colorGreen.value}, ${colorBlue.value})`,
      bg: `rgb(${rangeMax.value - colorRed.value}, ${rangeMax.value - colorGreen.value}, ${rangeMax.value - colorBlue.value})`
    }
  })

  // expose managed state as return value
  return {
    rangeMin,
    rangeMax,
    colorRed,
    colorGreen,
    colorBlue,
    colorValue
  }
}