<template>
  <router-view />
</template>

<script setup lang="ts">
//

import { useQuasar } from 'quasar';
const $q = useQuasar();
const temaGuardat = $q.localStorage.getItem('theme');
if (temaGuardat === 'dark') {
  $q.dark.set(true);
} else {
  $q.dark.set(false);
}
</script>
