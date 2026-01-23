<script setup lang="ts">
import SimpleProp from '../components/SimpleProp.vue';
import SimpleNamedSlot from '../components/SimpleNamedSlot.vue';
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-linear-to-r from-gray-950 to-blue-600">
    <SimpleProp msg="Hello World!" />
    <SimpleNamedSlot>
      "Money ain't got no owners, just spenders."
      <template v-slot:subtitle>
        Omar Little
      </template>
    </SimpleNamedSlot>
  </div>
</template>