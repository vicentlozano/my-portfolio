<template>
  <div class="grid">
    <HeaderComponent />
    <router-view />
    <section class="footer"></section>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  background: linear-gradient(
    145deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(3, 3, 39, 0.95) 30%,
    rgba(8, 45, 79, 0.85) 60%,
    rgba(9, 9, 57, 0.9) 100%
  );
  min-height: 100vh;
}
</style>
