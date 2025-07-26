<template>
  <div class="header" v-if="$q.screen.width > 800" :style="{
  backgroundColor: isScrolled
    ? ($q.dark.isActive ? 'rgba(29, 28, 28, 0.7)' : 'rgba(255, 255, 255, 0.7)')
    : ($q.dark.isActive ? '#1d1c1c' : 'white'),
  color: $q.dark.isActive ? 'white' : 'black',
  backdropFilter: isScrolled ? 'blur(17px)' : 'none',
  borderBottom: '1px solid ' + (isScrolled ? 'gray' : 'transparent')
}">
    <router-link to="/" class='custom-link no-border' v-if="$q.screen.width > 800">
      <span class="rotul">vilodev</span>
    </router-link>
    <section class="routes">
      <router-link to="/" :class="route.path === '/' ? 'custom-link on-route' : 'custom-link'">
        <q-icon class="pre-icon" name="mdi-home-outline" />
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
        <q-icon class="pre-icon" name="mdi-account-outline" />
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

    <I18nComponent :color="$q.dark.isActive ? 'white' : 'black'"/>
    <ThemeMode/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import I18nComponent from './I18nComponent.vue';
const { locale } = useI18n();
import { ref, watch, onMounted, onUnmounted } from 'vue';
import ThemeMode from './ThemeMode.vue';

//data
const { t } = useI18n();

const lang = ref(locale.value);
const $q = useQuasar();
const route = useRoute();
// Detectar scroll
const isScrolled = ref(false);
//methods
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
// computed&watchs
watch(lang, (val) => {
  locale.value = val;
});
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: min-content 1fr min-content min-content;
  gap: 2rem;
  padding: 0rem 3rem;
  place-items: center;
  height: 3.5rem;
  backdrop-filter: blur(20px);
}
.routes {
  display: flex;
  gap: 12px;
}
.title {
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
  padding: 0.5rem 1rem;
  white-space: nowrap;
  border: 0.7px solid rgba(163, 152, 152, 0);
  transition: all 0.3s ease;
  border-radius: 20px;
  text-align: center;
}
.no-border{
  border: none;
  background-color: none;
}

.on-route {
  border-radius: 20px;
  border: 0.7px solid rgba(163, 152, 152, 0.904);
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.145);
  transition: backdrop-filter 0.3s ease;
}
.rotul {
  font-weight: 800;
  cursor: pointer;
  font-size: 1.3em;
}

@media (hover: hover) and (pointer: fine) {
  .custom-link:hover {
    border-radius: 20px;
    border: 0.7px solid rgba(163, 152, 152, 0.904);
    backdrop-filter: blur(10px);
    transition: backdrop-filter 0.3s ease;
  }
}


</style>
