<script setup lang="ts">
import SimpleProp from '../components/SimpleProp.vue';
import SimpleNamedSlot from '../components/SimpleNamedSlot.vue';
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-linear-to-r from-gray-950 to-blue-600 p-3">
    <simple-prop msg="Hello World!" />
    <simple-named-slot class="text-center">
      Money ain't got no owners, just spenders.
      <template v-slot:subtitle>
        Omar Little
      </template>
    </simple-named-slot>
    <router-link to="/boilerplate" class="mt-8 bg-gray-50 px-4 py-2 text-blue-500 rounded">Boilerplate</router-link>
  </div>
</template>