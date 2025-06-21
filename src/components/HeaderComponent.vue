<template>
  <div class="header">
    <section class="title">
      <span class="rotul">&lt;</span>vilodev<span class="rotul">/&gt;</span>
    </section>
    <section class="routes">
      <router-link to="/" :class="route.path === '/' ? 'custom-link on-route' : 'custom-link'">
        <q-icon class="pre-icon" name="mdi-home" /> Home
      </router-link>

      <router-link
        to="/aboutme"
        :class="route.path === '/aboutme' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-account" /> About Me
      </router-link>

      <router-link
        to="/projects"
        :class="route.path === '/projects' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-folder-outline" /> Projects
      </router-link>

      <router-link
        to="/skills"
        :class="route.path === '/skills' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-star-outline" /> Skills
      </router-link>

      <router-link
        to="/experience"
        :class="route.path === '/experience' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-briefcase-outline" /> Experience
      </router-link>

      <router-link
        to="/contact"
        :class="route.path === '/contact' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-email-outline" /> Contact
      </router-link>

      <router-link
        to="/blog"
        :class="route.path === '/blog' ? 'custom-link on-route' : 'custom-link'"
      >
        <q-icon class="pre-icon" name="mdi-notebook-outline" /> Blog
      </router-link>
    </section>

    <section class="actions">I18N</section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
//data
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
</style>
