<template>
  <section
    class="mini-header"
    :style="{
      backgroundColor: isScrolled
        ? $q.dark.isActive
          ? 'rgba(29, 28, 28, 0.7)'
          : 'rgba(255, 255, 255, 0.7)'
        : $q.dark.isActive
          ? '#1d1c1c'
          : 'white',
      color: $q.dark.isActive ? 'white' : 'black',
      backdropFilter: isScrolled ? 'blur(17px)' : 'none',
      borderBottom: '1px solid ' + (isScrolled || menuOpen? 'gray' : 'transparent'),
    }"
  >
    <router-link to="/" class="custom-link no-border" @click="menuOpen = false">
      <span class="rotul">vilodev</span>
    </router-link>
    <section class="actions-route">
      <div class="title-route">
        <span class="route-text">{{ routeText }}</span>
      </div>
      <q-icon
        :name="menuOpen ? 'mdi-close' : 'fas fa-bars'"
        size="14px"
        class="hamburguer-btn"
        @click="menuOpen = !menuOpen"
      />
    </section>
  </section>

  <transition name="slide-down">
    <section
      class="menu-open"
      v-if="menuOpen"
      :style="{
        backgroundColor: $q.dark.isActive ? 'rgb(29, 28, 28)' : 'rgb(255, 255, 255)',
        color: $q.dark.isActive ? 'white' : 'black',
      }"
    >
      <section class="routes">
        <router-link
          to="/"
          @click="menuOpen = false"
          :class="route.path === '/' ? 'custom-link on-route' : 'custom-link'"
        >
          <q-icon class="pre-icon" name="mdi-home" />
          <span> {{ t('home') }} </span>
        </router-link>

        <router-link
          to="/aboutme"
          @click="menuOpen = false"
          :class="route.path === '/aboutme' ? 'custom-link on-route' : 'custom-link'"
        >
          <q-icon class="pre-icon" name="mdi-account" />
          <span>{{ t('aboutme') }}</span>
        </router-link>

        <router-link
          to="/projects"
          @click="menuOpen = false"
          :class="route.path === '/projects' ? 'custom-link on-route' : 'custom-link'"
        >
          <q-icon class="pre-icon" name="mdi-folder-outline" />
          <span>{{ t('projects') }}</span>
        </router-link>

        <router-link
          to="/experience"
          @click="menuOpen = false"
          :class="route.path === '/experience' ? 'custom-link on-route' : 'custom-link'"
        >
          <q-icon class="pre-icon" name="mdi-briefcase-outline" />
          <span> {{ t('experience') }} </span>
        </router-link>

        <router-link
          to="/contact"
          @click="menuOpen = false"
          :class="route.path === '/contact' ? 'custom-link on-route' : 'custom-link'"
        >
          <q-icon class="pre-icon" name="mdi-email-outline" />
          <span> {{ t('contact') }} </span>
        </router-link>

        <router-link
          to="/blog"
          @click="menuOpen = false"
          :class="route.path === '/blog' ? 'custom-link on-route' : 'custom-link'"
        >
          <q-icon class="pre-icon" name="mdi-notebook-outline" />
          <span> {{ t('blog') }} </span>
        </router-link>
        <section class="config">
          <I18nComponent :color="$q.dark.isActive ? 'white' : 'black'" />
          <ThemeMode />
        </section>
      </section>
    </section>
  </transition>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import I18nComponent from './I18nComponent.vue';
import ThemeMode from './ThemeMode.vue';

const { t, locale } = useI18n();
const route = useRoute();
const menuOpen = ref(false);
const routeName = computed(() => (typeof route.name === 'string' ? route.name : ''));
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
  padding: 0rem 1.5rem;
  height: 3.5rem;
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);
  z-index: 3;
}
.title {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
}
.rotul {
  font-weight: 800;
  font-size: 1.3em;
}
.actions-route {
  display: flex;
  flex-direction: row;
  justify-items: right;
  align-items: center;
}
.route-text {
  white-space: nowrap;
  font-size: 1.3em;
  font-weight: 600;
  padding-right: 1.5rem;
}

.hamburguer-btn {
  padding: 0.4rem;
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;
}

.menu-open {
  position: fixed;
  top: 3.5rem;
  right: 0;
  width: 100%;
  height: calc(100% - 3.5rem); /* ocupa tota l'altura del viewport */
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
}
.close {
  align-self: self-end;
}
.routes {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 0.5rem;

  justify-content: center;
  align-items: center;
}
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}
.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s ease; /* mig segon, ajusta el temps si vols més lent o ràpid */
}
/* routes */
.custom-link {
  display: flex;
  place-items: center;
  font-size: 1.1em;
  gap: 0.5rem;
  text-decoration: none;
  padding: 0.3rem 0.5rem;
  white-space: nowrap;
  border-radius: 20px;
  border: 0.7px solid rgba(163, 152, 152, 0);
  transition: background-color 0.3s ease;
  text-align: center;
}

.on-route {
  border-radius: 20px;
  border: 0.7px solid rgba(163, 152, 152, 0.904);
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.145);
  transition: backdrop-filter 0.3s ease;
}
.no-border {
  border: none;
}
.config {
  margin-top: 1rem;
  gap: 1rem;
  display: flex;
}

@media (hover: hover) and (pointer: fine) {
  .custom-link:hover {
    border: 0.7px solid rgba(163, 152, 152, 0.904);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.05);
    transition: backdrop-filter 0.3s ease;
  }
  .hamburguer-btn:hover {
    background-color: rgba(255, 255, 255, 0.528);
  }
}
</style>
