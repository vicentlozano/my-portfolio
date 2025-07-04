<template>
  <div class="no-yet">
    <h4 class="comment">
      {{ t('soon') }}
      <span class="dot">.</span>
      <span class="dot">.</span>
      <span class="dot">.</span>
    </h4>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
///data
const { t } = useI18n();
</script>

<style scoped>
.no-yet {
  display: grid;
  place-items: center;
  backdrop-filter: blur(20px);
}
.comment {
  text-align: center;
  color: whitesmoke;
}
.dot {
  opacity: 0;
  animation-name: blink;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0%,
  20% {
    opacity: 0;
  }
  50%,
  100% {
    opacity: 1;
  }
}
</style>
