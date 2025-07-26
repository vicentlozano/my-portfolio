<template>
  <div class="main">
    <section class="timeline">
      <div class="q-px-lg q-py-md">
        <q-timeline :layout="layout" color="primary">
          <q-timeline-entry heading>{{t('myExperience')}} </q-timeline-entry>

          <q-timeline-entry
            :title="t('dualTrainingTitle')"
            :subtitle="t('dualTrainingSubtitle')"
            side="right"
            icon="school"
          >
            <div>
              {{t('dualTrainingDesc')}}
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            :title="t('internTitle')"
            :subtitle="t('internSubtitle')"
            side="left"
            icon="work"
          >
            <div>
              {{t('internDesc')}}
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            :title="t('ownProjectsTitle')"
            :subtitle="t('ownProjectsSubtitle')"
            side="right"
            icon="code"
          >
            <div>
             {{t('ownProjectsDesc')}}
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            :title="t('jobSearchTitle')"
            :subtitle="t('jobSearchSubtitle')"
            side="left"
            icon="search"
          >
            <div>
             {{t('jobSearchDesc')}}
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </section>
    <section :class="$q.screen.width > 900 ? 'portfolio' : 'mobile-portfolio'">
      <div :class="$q.screen.width > 900 ? 'ask' : 'mobile-ask'">
        <q-icon name="mdi-folder-outline" size="50px" color="white"></q-icon>
        <span class="text-ask">{{t('seeProjects')}}</span>
      </div>

      <div :class="$q.screen.width > 900 ? 'actions' : 'mobile-actions'">
        <router-link to="/projects" class="button-router"> {{t('myProjects')}} </router-link>
        <router-link to="/contact" class="button-router"> {{t('talk')}}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

//data
const { t } = useI18n();

const $q = useQuasar();
//computed
const layout = computed(() => {
  return $q.screen.lt.sm ? 'dense' : $q.screen.lt.md ? 'comfortable' : 'loose';
});
</script>

<style scoped>
.timeline {
  background-color: rgba(20, 20, 20, 0.101);
  height: 100%;
  padding-top: 2rem;
}
.mobile-portfolio {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: rgb(37, 127, 191);
  padding: 2rem 1rem;
  gap: 1rem;
}
.mobile-ask {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.actions {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
}
.mobile-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.portfolio {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  background-color: rgb(37, 127, 191);
  padding: 2.4rem 2rem;
  gap: 2rem;
}
.ask {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.text-ask {
  font-size: 1.1em;
  letter-spacing: 2px;
}
.button-router {
  text-decoration: none;
  border: 2px solid black;
  padding: 0.5rem;
  color: black;
  font-size: 1.1em;
  font-weight: 470;
}
.button-router:hover {
  background-color: black;
  color: white;
  transition: all 0.4s ease;
}
.main {
  display: grid;
  grid-template-rows: 1fr min-content;
  width: 100%;
  height: 100%;
}
@media (max-width: 550px) {
  .timeline {
    padding-top: 1rem;
  }
}
</style>
