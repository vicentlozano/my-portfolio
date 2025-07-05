<template>
  <div class="principal-grid">
    <q-input
      v-model="search"
      debounce="500"
      filled
      placeholder="Search"
      bg-color="white"
      style="padding: 2rem 2rem 0rem 2rem"
    >
      <template v-slot:append>
        <q-icon name="info">
          <q-tooltip
            class="bg-indigo"
            transition-show="flip-right"
            transition-hide="flip-left"
            anchor="bottom middle"
            self="bottom middle"
            :offset="[40, 40]"
          >
            <strong>{{t('customSearch')}}</strong>
          </q-tooltip>
        </q-icon>

        <q-icon name="search" />
      </template>
    </q-input>
    <section class="grid-projects">
      <div v-for="(project, index) in projectsFiltered" :key="index">
        <ProjectsCard :project="project" :finish="project.finish" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectsCard from 'src/components/ProjectsCard.vue';
type Project = {
  title: string;
  subtitle: string;
  img: string[];
  url: string;
  finish: boolean;
  repository: string;
  platforms: platform[];
  technologies: technology[];
};
type technology = {
  name: string;
  icon: string;
};
type platform = {
  name: string;
  url: string;
};

//data
const { t } = useI18n();
const search = ref();
const projects: Project[] = [
  {
    title: 'travels',
    subtitle: 'travelsDesc',
    img: [
      '1.png',
      '2.png',
      '3.png',
      '4.png',
    ],
    url: 'https://travels.vilodev.com',
    finish: true,
    repository: 'https://github.com/vicentlozano/travelsAppQuasar',
    platforms: [{ name: 'web', url: 'https://travels.vilodev.com' }],
    technologies: [
      { name: 'Vue.js', icon: 'mdi-vuejs' },
      { name: 'Node.js', icon: 'mdi-nodejs' },
      { name: 'SQL', icon: 'mdi-database' },
      { name: 'AWS', icon: 'mdi-aws' },
    ],
  },
  {
    title: 'bombo bingo',
    subtitle: 'bingoDesc',

    img: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
    ],
    url: 'https://travels.vilodev.com',
    repository: 'https://github.com/vicentlozano/androiBingo',
    finish: true,
    platforms: [{ name: 'android', url: 'https://travels.vilodev.com' }],
    technologies: [
      { name: 'Kotlin', icon: 'mdi-language-kotlin' },
      { name: 'Android Studio', icon: 'android' },
    ],
  },
  {
    title: 'pixaDuelo',
    subtitle: 'pixaDueloDesc',
    img: ['codeimage.jpg'],
    url: 'https://travels.vilodev.com',
    finish: false,
    repository: 'https://github.com/vicentlozano/pixa_duelo',

    platforms: [
      { name: 'android', url: 'https://travels.vilodev.com' },
      { name: 'apple', url: 'https://travels.vilodev.com' },
      { name: 'web', url: 'https://travels.vilodev.com' },
    ],
    technologies: [
      { name: 'Flutter', icon: 'fa-brands fa-flutter' },
      { name: 'Dart', icon: 'fa-brands fa-dart-lang' },

      { name: 'Python', icon: 'mdi-language-python' },
      { name: 'Firabase', icon: 'mdi-fire' },
    ],
  },
];
const projectsFiltered = computed(() => {
  const s = search.value?.trim().toLowerCase() || '';
  if (!s) return projects; // si no hi ha cerca, torna tots
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(s) ||
      project.technologies.some((tech) => tech.name.toLowerCase().includes(s)),
  );
});
</script>

<style scoped>
.grid-projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem;
  gap: 2rem;
}
@media (min-width: 1201px) and (max-width: 2000px) {
  .grid-projects {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 1200px) {
  .grid-projects {
    grid-template-columns: 1fr;
  }
}
</style>
