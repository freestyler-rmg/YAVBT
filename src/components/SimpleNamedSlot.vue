<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="text-2xl text-white mt-6">
      <slot>default slot</slot>
    </h2>
    <hr class="border-white w-10 mt-3 mb-2" />
    <h3 class="text-md text-white">
      <slot name="subtitle">subtitle slot</slot>
    </h3>
  </div>
</template>