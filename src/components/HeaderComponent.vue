<template>
  <div class="header">
    <router-link to="/" class="title" v-if="$q.screen.width > 800">
      <span class="rotul">&lt;</span>vilodev<span class="rotul">/&gt;</span>
    </router-link>
    <section class="routes">
      <router-link to="/" :class="route.path === '/' ? 'custom-link on-route' : 'custom-link'">
        <q-icon class="pre-icon" name="mdi-home" />
        <span v-if="$q.screen.width > 1200"> {{ t('home') }} </span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          {{ t('home') }}
        </q-tooltip>
      </router-link>

      <router-link
        to="/aboutme"
        :class="route.path === '/aboutme' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-account" />
        <span v-if="$q.screen.width > 1200">{{ t('aboutme') }}</span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          {{ t('aboutme') }}
        </q-tooltip>
      </router-link>

      <router-link
        to="/projects"
        :class="route.path === '/projects' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-folder-outline" />
        <span v-if="$q.screen.width > 1200">{{ t('projects') }}</span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          {{ t('projects') }}
        </q-tooltip>
      </router-link>

      <router-link
        to="/experience"
        :class="route.path === '/experience' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-briefcase-outline" />
        <span v-if="$q.screen.width > 1200"> {{ t('experience') }} </span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          {{ t('experience') }}
        </q-tooltip>
      </router-link>

      <router-link
        to="/contact"
        :class="route.path === '/contact' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-email-outline" />
        <span v-if="$q.screen.width > 1200"> {{ t('contact') }} </span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          {{ t('contact') }}
        </q-tooltip>
      </router-link>

      <router-link
        to="/blog"
        :class="route.path === '/blog' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-notebook-outline" />
        <span v-if="$q.screen.width > 1200"> {{ t('blog') }} </span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          {{ t('blog') }}
        </q-tooltip>
      </router-link>
    </section>

    <section class="actions" v-if="$q.screen.width > 800">
      <q-btn flat round color="primary" icon="mdi-translate" aria-label="Idioma">
        <q-menu
          anchor="bottom middle"
          self="top middle"
          :offset="[0, 25]"
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
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
import { ref, watch } from 'vue';

//data
const { t } = useI18n();

const lang = ref(locale.value);
const $q = useQuasar();
const route = useRoute();
//methods
const setLang = (l: string) => {
  lang.value = l;
  locale.value = l;
};
// computed&watchs
watch(lang, (val) => {
  locale.value = val;
});
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 2rem;
  padding: 1rem 3rem;
  place-items: center;
  height: 5rem;
  backdrop-filter: blur(20px);
  background-color: rgba(7, 32, 52, 0.509);
}
.routes {
  display: flex;
  gap: 12px;
}
.title {
  color: whitesmoke;
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
}
.custom-link {
  display: flex;
  place-items: center;
  font-size: 1.1em;
  gap: 0.5rem;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  border: 0.7px solid rgba(163, 152, 152, 0);
  transition: all 0.3s ease;
  border-radius: 5px;
  text-align: center;
}
.custom-link:hover {
  border-radius: 20px;
  border: 0.7px solid rgba(163, 152, 152, 0.904);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.05);
  transition: backdrop-filter 0.3s ease;
}
.on-route {
  border-radius: 20px;
  border: 0.7px solid rgba(163, 152, 152, 0.904);
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.145);
  transition: backdrop-filter 0.3s ease;
}
.rotul {
  color: rgb(13, 116, 211);
  font-weight: 800;
  cursor: pointer;
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
@media (max-width: 800px) {
  .header {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem 1rem;
    place-items: center;
    height: 5rem;
  }
  .routes {
    display: flex;
    width: 100%;
    justify-content: space-around;
    gap: 1px;
  }
  .custom-link {
    padding: 0.5rem 0.5rem;
  }
}

</style>
