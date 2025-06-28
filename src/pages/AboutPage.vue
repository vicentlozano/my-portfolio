<template>
  <div class="main">
    <section class="hellow">
      <div class="intro">
        <section class="text">
          <div class="first">
            <span class="text-intro">HOLA, MI NOMBRE ES</span>
            <span class="name">VICENT LOZANO</span>
          </div>
          <img class="me" src="../assets/yop.JPG" />

          <div class="second">
            <span class="subtitle">Full-Stack Developer | Web · iOS · Android</span>
          </div>
        </section>
        <q-separator color="white" inset :vertical="$q.screen.width > 1200" />

        <section class="intro-text">
          <p class="description">
            Desarrollo aplicaciones web y móviles de principio a fin, combinando un frontend cuidado
            con backends funcionales.
          </p>
          <span class="findme">ENCUENTRAME</span>
          <section class="links-social">
            <q-btn
              flat
              round
              color="blue-10"
              icon="mdi-linkedin"
              href="https://www.linkedin.com/in/vicent-lozano-hervas-9bb498187"
              target="_blank"
            />
            <q-btn
              flat
              round
              color="white"
              icon="mdi-github"
              href="https://github.com/tu-usuario"
              target="_blank"
            />
            <q-btn
              flat
              round
              color="pink"
              icon="mdi-instagram"
              href="https://www.instagram.com/tu-usuario"
              target="_blank"
            />
            <q-btn
              flat
              round
              color="blue"
              icon="mdi-facebook"
              href="https://www.facebook.com/tu-usuario"
              target="_blank"
            />
            <q-btn flat round color="red" icon="mdi-gmail" href="mailto:tu-correo@gmail.com" />
          </section>
        </section>
      </div>
    </section>

    <section class="where">
      <div class="full-image">
        <h4 class="title-from">Mis origenes</h4>
      </div>
      <div class="where-text">
        <span class="from-subtitle">Desde Calpe programando con 💙</span>
        <article class="text-from">
          <span>
            Tengo 31 años, soy padre y actualmente resido en Calpe, mi pequeño paraíso. Nací en
            Alginet y desde pequeño me ha apasionado la tecnología y el poder de crear cosas desde
            cero.<br />
            <br />
            Tras años de esfuerzo, he retomado mis estudios y completado el ciclo de Desarrollo de
            Aplicaciones Web. Hoy, me siento preparado para nuevos retos, con una base técnica
            sólida y muchas ganas de seguir creciendo.
          </span>
        </article>
      </div>
    </section>
    <section class="skills">
      <h4 class="section-tittle">Mis habilidades y conocimientos</h4>
      <section class="grid-valors">
        <p>VUe.js</p>
        <p>El esfuerzo y dedicacion no se negocia</p>
        <p>Disfruto trabajando en equipo y compartir conociemientos</p>
        <p>Codigo limpio y reutilizable</p>
        <p>La perfeccion no existe, pero siemprre podemos acercarnos un poco mas</p>
        <p>El respeto y la integracion es esencial</p>
      </section>
    </section>
    <section class="filosofy">
      <h4 class="section-tittle">Mi filosofia y valores</h4>
      <section class="grid-valors">
        <p>Aprendizage continuo</p>
        <p>El esfuerzo y dedicacion no se negocia</p>
        <p>Disfruto trabajando en equipo y compartir conociemientos</p>
        <p>Codigo limpio y reutilizable</p>
        <p>La perfeccion no existe, pero siemprre podemos acercarnos un poco mas</p>
        <p>El respeto y la integracion es esencial</p>
      </section>
    </section>
    <section class="timeline">
      <div class="q-px-lg q-py-md">
        <q-timeline :layout="layout" color="secondary">
          <q-timeline-entry heading> Mis últimos pasos </q-timeline-entry>

          <q-timeline-entry title="Inicio del ciclo DAW" subtitle="Septiembre 2023" side="left">
            <div>
              Decido comenzar el ciclo formativo de Desarrollo de Aplicaciones Web para dedicarme
              profesionalmente al desarrollo.
            </div>
          </q-timeline-entry>

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
            subtitle="Abril 2025"
            side="right"
            icon="code"
          >
            <div>
              Desarrollo proyectos personales con Vue, Quasar y Node.js per posar en pràctica els
              meus coneixements i demostrar la meua iniciativa.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Finalización del ciclo DAW"
            subtitle="Junio 2025"
            side="left"
            color="orange"
            icon="done_all"
          >
            <div>
              Obtengo el título de Técnico Superior en Desarrollo de Aplicaciones Web, con
              experiencia práctica en empresa y diversos projectes propis.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Curso de Flutter"
            subtitle="Julio 2025"
            side="right"
            icon="smartphone"
          >
            <div>
              Completo un curso intensivo de Flutter para ampliar mis habilidades al desarrollo de
              aplicaciones mòbils multiplataforma.
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
          <q-timeline-entry
            title="Inicio del ciclo DAM (convalidado)"
            subtitle="Septiembre 2025"
            side="left"
            icon="school"
          >
            <div>
              Tras completar DAW, empiezo el ciclo de Desarrollo de Aplicaciones Multiplataforma
              (DAM), convalidando el primer curso. Mi objetivo es ampliar mis conocimientos en
              desarrollo de apps móviles y de escritorio.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </section>
    <section class="social">
      <h2>Social y CV</h2>
      <section class="grid-valors">
        <p>Github</p>
        <p>Linkedin</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Discord</p>
        <p>Curriculum</p>
      </section>
    </section>
    <section :class="$q.screen.width > 900 ? 'portfolio' : 'mobile-portfolio'">
      <div :class="$q.screen.width > 900 ? 'ask' : 'mobile-ask'">
        <q-icon name="mdi-folder-outline" size="50px" color="white"></q-icon>
        <span class="text-ask">DESCUBRE MIS PROYECTOS</span>
      </div>

      <div :class="$q.screen.width > 900 ? 'actions' : 'mobile-actions'">
        <router-link to="/projects" class="button-router"> MIS PROYECTOS</router-link>

        <router-link to="/contact" class="button-router"> HABLAMOS?</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed } from 'vue';

//data
const $q = useQuasar();
const layout = computed(() => {
  return $q.screen.lt.sm ? 'dense' : $q.screen.lt.md ? 'comfortable' : 'loose';
});
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 100%;
  height: auto;
}
.hellow {
  background-image: url('../assets/codeimage.jpg');

  background-size: cover;
}
.intro {
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  gap: 2rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
}
.title-from {
  text-align: center;
  padding: 2rem;
  background-color: rgba(41, 40, 39, 0.339);
}

.text {
  display: grid;
  grid-template-rows: min-content min-content min-content;
  padding: 2rem;
  align-content: center;
  gap: 1rem;
  place-items: center;
  height: 100%;
  width: 100%;
}
.from-subtitle {
  font-size: 2em;
  letter-spacing: 1.4px;
}
.symbol {
  color: white;
  font-size: 25rem;
  font-weight: 200;
}
.description {
  text-align: center;
  place-self: center;
  padding: 2rem;
}
.first {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.where-text {
  display: flex;
  text-align: justify;
  flex-direction: column;
  padding: 2rem 0.7rem;
  gap: 2rem;
}
.full-image {
  background-image: url('../assets/calpe-hight.png');
  min-height: 400px;
  height: 100%;
  width: 100%;
}
.intro-text {
  display: grid;
  grid-template-rows: 1fr min-content min-content;
  font-size: 1.5em;
  padding: 2rem;
  gap: 1rem;
  max-width: 600px;
  justify-self: center;
}
.text-from {
  font-size: 1.2em;
  padding-right: 1rem;
  letter-spacing: 1.5px;
  color: rgb(113, 112, 112);
}
.links-social {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-self: end;
  justify-items: center;
}
.section-tittle {
  padding: 3rem;
  background-color: rgba(19, 118, 171, 0.435);
  text-align: center;
}
.findme {
  color: white;
  font-size: 1em;
  text-align: center;
}
.me {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 8px solid rgb(37, 127, 191);
}
.grid-valors {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  grid-auto-rows: minmax(350px, 1fr);
  height: min-content;
}
.timeline {
  backdrop-filter: blur(20px);
  background-color: rgba(237, 240, 241, 0.996);
}
.where {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 2rem;
  background-color: white;
}
h2 {
  color: rgb(37, 127, 191);
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
}

h4 {
  color: whitesmoke;
  margin: 0;
  padding: 0;
}

p {
  color: white;
}
.separator-section {
  background-color: rgb(37, 127, 191);
  padding: 2.4rem 2rem;
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
.actions {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
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
.text-intro {
  font-size: 1.4em;
  color: white;
  letter-spacing: 2px;
}
.name {
  font-size: 1.7em;
  color: white;
  letter-spacing: 2px;
}
.subtitle {
  font-size: 1em;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  padding: 2rem;
}
@media (max-width: 1200px) {
  .intro {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content 1fr;
    gap: 0rem;
  }
  .where {
    grid-template-columns: 1fr;

  }
}
</style>
