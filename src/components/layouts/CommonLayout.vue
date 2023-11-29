<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>
<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
