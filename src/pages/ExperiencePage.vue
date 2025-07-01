<template>
  <div class="main">
    <section class="timeline">
      <div class="q-px-lg q-py-md">
        <q-timeline :layout="layout" color="primary">
          <q-timeline-entry heading>Mi experiencia laboral </q-timeline-entry>

          <q-timeline-entry
            title="Formación Dual en AUTIS Ingenieros"
            subtitle="Mayo 2024"
            side="right"
            icon="school"
          >
            <div>
              Inicio mi formación dual en AUTIS Ingenieros, combinando clases con experiencia en
              empresa en un entorno profesional real.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Becario en AUTIS Ingenieros"
            subtitle="Marzo 2025"
            side="left"
            icon="work"
          >
            <div>
              Me incorporo como becario, aportando valor real a proyectos internos y consolidando
              mis conocimientos en entornos productivos.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Creación de proyectos propios"
            subtitle="Junio 2025"
            side="right"
            icon="code"
          >
            <div>
              Desarrollo proyectos personales con Vue, Quasar y Node.js para poner en práctica mis
              conocimientos y demostrar mi iniciativa.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="En busca de oportunidades laborales"
            subtitle="Actualidad"
            side="left"
            icon="search"
          >
            <div>
              Estoy abierto a nuevas oportunidades donde pueda seguir creciendo como desarrollador y
              contribuir a proyectos ambiciosos.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </section>
    <section :class="$q.screen.width > 900 ? 'portfolio' : 'mobile-portfolio'">
      <div :class="$q.screen.width > 900 ? 'ask' : 'mobile-ask'">
        <q-icon name="mdi-folder-outline" size="50px" color="white"></q-icon>
        <span class="text-ask">¿QUIERES VER TODOS MIS PROYECTOS?</span>
      </div>

      <div :class="$q.screen.width > 900 ? 'actions' : 'mobile-actions'">
        <router-link to="/projects" class="button-router"> MIS PROYECTOS </router-link>
        <router-link to="/contact" class="button-router"> HABLAMOS?</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed } from 'vue';
const $q = useQuasar();
//computed
const layout = computed(() => {
  return $q.screen.lt.sm ? 'dense' : $q.screen.lt.md ? 'comfortable' : 'loose';
});
</script>

<style scoped>
.timeline {
  background-color: rgba(20, 20, 20, 0.477);
  color: white;
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
