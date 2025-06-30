<template>
  <div class="header">
    <section class="title" v-if="$q.screen.width > 800">
      <span class="rotul">&lt;</span>vilodev<span class="rotul">/&gt;</span>
    </section>
    <section class="routes">
      <router-link to="/" :class="route.path === '/' ? 'custom-link on-route' : 'custom-link'">
        <q-icon class="pre-icon" name="mdi-home" /> <span v-if="$q.screen.width > 1200">Home</span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          Home
        </q-tooltip>
      </router-link>

      <router-link
        to="/aboutme"
        :class="route.path === '/aboutme' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-account" />
        <span v-if="$q.screen.width > 1200">About Me</span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          About Me
        </q-tooltip>
      </router-link>

      <router-link
        to="/projects"
        :class="route.path === '/projects' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-folder-outline" />
        <span v-if="$q.screen.width > 1200">Projects</span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          Projects
        </q-tooltip>
      </router-link>


      <router-link
        to="/experience"
        :class="route.path === '/experience' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-briefcase-outline" />
        <span v-if="$q.screen.width > 1200">Experience</span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          Experience
        </q-tooltip>
      </router-link>

      <router-link
        to="/contact"
        :class="route.path === '/contact' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-email-outline" />
        <span v-if="$q.screen.width > 1200">Contact</span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          Contact
        </q-tooltip>
      </router-link>

      <router-link
        to="/blog"
        :class="route.path === '/blog' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-notebook-outline" />
        <span v-if="$q.screen.width > 1200">Blog</span>
        <q-tooltip
          v-if="$q.screen.width > 800 && $q.screen.width < 1200"
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          Blog
        </q-tooltip>
      </router-link>
    </section>

    <section class="actions" v-if="$q.screen.width > 800">
      <q-btn flat round color="primary" icon="mdi-cog"
        ><q-tooltip transition-show="flip-right" transition-hide="flip-left">
          Configuration
        </q-tooltip></q-btn
      >
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

//data
const $q = useQuasar();
const route = useRoute();
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
