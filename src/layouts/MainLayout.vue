<template>
  <div class="grid">
    <HeaderComponent class="header" />
    <router-view />
    <RouteBar v-if="$q.screen.width < 800"  />
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
  
}
</style>
