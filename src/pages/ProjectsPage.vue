<template>
  <div class="principal-grid">
    <FilterComponent />
    <section class="grid-projects">
      <div v-for="(project, index) in projects" :key="index">
        <ProjectsCard :project="project" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import codeimg from '../assets/codeimage.jpg'
import calpe from '../assets/calpe-hight.png'
type Project = {
  title: string;
  img: string[];
  url: string;
  technologies: technology[];
};
type technology = {
  name: string;
  icon: string;
};
const projects: Project[] = [
  {
    title: 'travels',
    img: [codeimg,calpe],
    url: 'https://travels.vilodev.com',
    technologies: [{ name: 'Vue.js', icon: 'mdi-cog' },{ name: 'Vue.js', icon: 'mdi-cog' },{ name: 'Vue.js', icon: 'mdi-cog' },{ name: 'Vue.js', icon: 'mdi-cog' },],
  },
  {
    title: 'bingo',
    img: [codeimg,calpe],
    url: 'https://travels.vilodev.com',
    technologies: [{ name: 'Vue.js', icon: 'mdi-cog' },{ name: 'Vue.js', icon: 'mdi-cog' },{ name: 'Vue.js', icon: 'mdi-cog' },{ name: 'Vue.js', icon: 'mdi-cog' },],
  },
  {
    title: 'pixaDuelo',
    img: [codeimg,calpe],
    url: 'https://travels.vilodev.com',
    technologies: [{ name: 'Vue.js', icon: 'mdi-cog' },{ name: 'Vue.js', icon: 'mdi-cog' },{ name: 'Vue.js', icon: 'mdi-cog' },{ name: 'Vue.js', icon: 'mdi-cog' },],
  },
];
import FilterComponent from 'src/components/FilterComponent.vue';
import ProjectsCard from 'src/components/ProjectsCard.vue';
</script>

<style scoped>
.grid-projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem;
  gap: 2rem;
}
@media(min-width:1201px) and (max-width:2000px){
    .grid-projects {
  grid-template-columns: 1fr 1fr ;
 
}
}
@media(max-width:1200px){
    .grid-projects {
  grid-template-columns: 1fr ;
 
}
}
</style>
