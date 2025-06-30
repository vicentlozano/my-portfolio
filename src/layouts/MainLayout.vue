<template>
  <div class="grid">
    <HeaderComponent class="header" />
    <router-view />
    <section class="footer" v-if="$q.screen.width > 800"></section>
    <RouteBar v-else />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue';
import RouteBar from 'src/components/RouteBar.vue';
import { useQuasar } from 'quasar';

//data
const $q = useQuasar();
</script>

<style scoped>
.grid {
  display: grid;
  width: 100%;
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

.header {
  position: sticky;
  top: 0;
  z-index: 1;
}

@media (max-width: 800px) {
  .grid {
    display: grid;
    width: 100%;
    grid-template-rows: min-content 1fr min-content;
  }
  .header {
    grid-row: 3;
    position: sticky;
    bottom: 0;
    backdrop-filter: blur(20px);
    background-color: rgba(7, 32, 52, 0.509);
    z-index: 1;
  }
}
</style>
