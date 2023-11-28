<script setup lang="ts">
import { onMounted } from 'vue';
import { fetchPlanets } from '@/api/requests.ts';

onMounted(() => {
  const planets = fetchPlanets();
});
</script>

<template>
  <h1>Planets</h1>
</template>
