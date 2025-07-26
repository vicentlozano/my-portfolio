<template>
  <q-btn
    dense
    flat
    round
    :color="$q.dark.isActive ? 'white' : 'black'"
    icon="mdi-compare"
    @click="setTheme"
    class="btn-theme"
  />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
const $q = useQuasar();
const setTheme = () => {
  $q.dark.toggle()
const theme = $q.dark.isActive ? 'dark' : 'light';
  $q.localStorage.set('theme', theme);
};
</script>
<style scoped></style>

