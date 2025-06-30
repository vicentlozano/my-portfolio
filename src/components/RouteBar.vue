<template>
  <section class="mini-header">
    <div class="title"><span class="rotul">&lt;</span>vilodev<span class="rotul">/&gt;</span></div>
    <section class="actions-route">
      <div class="title-route">
        <span class="route-text">{{ route.name }}</span>
      </div>
      <section class="actions">
        <q-btn flat round color="primary" icon="mdi-cog"
          ><q-tooltip transition-show="flip-right" transition-hide="flip-left">
            Configuration
          </q-tooltip></q-btn
        >
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

//data
const route = useRoute();
</script>

<style scoped>
.mini-header {
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  justify-items: start;
  grid-row: 1;
  padding-left: 2rem;
  padding-right: 0.5rem;
  min-height: 4rem;
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);
  background-color: rgba(7, 32, 52, 0.509);
  z-index: 1;
}
.title {
  color: whitesmoke;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
}
.rotul {
  color: rgb(13, 116, 211);
  font-weight: 800;
}
.actions-route {
  display: flex;
  flex-direction: row;
  justify-items: right;
  align-items: center;
}
.route-text {
  white-space: nowrap;
  color: rgb(103, 161, 199);
  font-size: 1.3em;
  font-weight: 600;
}
</style>
