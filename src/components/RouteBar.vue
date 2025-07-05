<template>
  <section class="mini-header">
    <router-link to="/" class="title">
      <span class="rotul">&lt;</span>vilodev<span class="rotul">/&gt;</span>
    </router-link>    <section class="actions-route">
      <div class="title-route">
        <span class="route-text">{{routeText }}</span>
      </div>
      <section class="actions">
        <q-btn flat round color="primary" icon="mdi-translate" aria-label="Idioma">
          <q-menu
            anchor="bottom middle"
            self="top middle"
            :offset="[0, 10]"
            style="background-color: transparent"
          >
            <q-list class="center-flags" style="padding: 0">
              <q-item clickable v-close-popup @click="setLang('es-ES')" style="padding: 4px">
                <q-item-section avatar style="width: auto; padding: 0">
                  <img src="/flags/es.svg" class="flag" />
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="setLang('en-US')" style="padding: 4px">
                <q-item-section avatar style="width: auto; padding: 0">
                  <img src="/flags/en.svg" class="flag" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';
import { ref,  computed } from 'vue';
import { useRoute } from 'vue-router';

const { t, locale } = useI18n();
const lang = ref(locale.value);
const route = useRoute();

const routeName = computed(() => (typeof route.name === 'string' ? route.name : ''));

const setLang = (l: string) => {
  lang.value = l;
  locale.value = l;
};

const routeText = computed(() => {
  if (!routeName.value) return '';
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  locale.value; // <-- forcem dependència reactiva a l'idioma
  return t(routeName.value);
});


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
  text-decoration: none;
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
  padding-right: 1.5rem;
}
.center-flags {
  background-color: rgba(20, 31, 45, 0.662);
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-content: center;
  height: 100px;
  width: 65px;
}

.flag {
  padding: 0.5rem;
  height: 100%;
  width: 100%;
}
</style>
