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
              href="https://github.com/vicentlozano"
              target="_blank"
            />
            <q-btn
              flat
              round
              color="pink"
              icon="mdi-instagram"
              href="https://www.instagram.com/vicentlozano94"
              target="_blank"
            />
            <q-btn
              flat
              round
              color="blue"
              icon="mdi-facebook"
              href="https://www.facebook.com/vicentlozano"
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
    <h4 class="section-tittle">Mis habilidades y conocimientos</h4>
    <section class="skills">
      <section class="skills-schem" style="background-color: rgba(21, 100, 0, 0.1)">
        <div class="title-icon">
          <h4>Program languages</h4>
          <q-icon name="code" size="150px" class="section-icon" color="orange" />
        </div>
        <q-separator color="white" :vertical="$q.screen.width > 1200" />

        <section class="grid-skills">
          <div v-for="(skill, index) in skills.languages" :key="index" class="skill">
            <q-icon size="40px" :name="skill.icon" :color="skill.color"></q-icon>
            <span class="title-skill">
              {{ skill.name }}
            </span>
          </div>
        </section>
      </section>

      <section class="skills-schem" style="background-color: rgba(0, 0, 50, 0.1)">
        <div class="title-icon">
          <h4>Frontend</h4>
          <q-icon name="palette" size="150px" class="section-icon" color="blue" />
        </div>
        <q-separator color="white" :vertical="$q.screen.width > 1200" />

        <section class="grid-skills">
          <div v-for="(skill, index) in skills.frontend" :key="index" class="skill">
            <q-icon size="40px" :name="skill.icon" :color="skill.color"></q-icon>
            <span class="title-skill">
              {{ skill.name }}
            </span>
          </div>
        </section>
      </section>

      <section class="skills-schem" style="background-color: rgba(100, 0, 100, 0.1)">
        <div class="title-icon">
          <h4>Backend</h4>
          <q-icon name="dns" size="150px" class="section-icon" color="red" />
        </div>
        <q-separator color="white" :vertical="$q.screen.width > 1200" />

        <section class="grid-skills">
          <div v-for="(skill, index) in skills.backend" :key="index" class="skill">
            <q-icon size="40px" :name="skill.icon" :color="skill.color"></q-icon>
            <span class="title-skill">
              {{ skill.name }}
            </span>
          </div>
        </section>
      </section>

      <section class="skills-schem" style="background-color: rgba(128, 128, 128, 0.1)">
        <div class="title-icon">
          <h4>DevOps</h4>
          <q-icon name="build_circle" size="150px" class="section-icon" color="grey" />
        </div>
        <q-separator color="white" :vertical="$q.screen.width > 1200" />

        <section class="grid-skills">
          <div v-for="(skill, index) in skills.devops" :key="index" class="skill">
            <q-icon size="40px" :name="skill.icon" :color="skill.color"></q-icon>
            <span class="title-skill">
              {{ skill.name }}
            </span>
          </div>
        </section>
      </section>

      <section class="skills-schem" style="background-color: rgba(0, 255, 255, 0.1)">
        <div class="title-icon">
          <h4>Cloud</h4>
          <q-icon name="cloud" size="150px" class="section-icon" color="cyan" />
        </div>
        <q-separator color="white" :vertical="$q.screen.width > 1200" />

        <section class="grid-skills">
          <div v-for="(skill, index) in skills.cloud" :key="index" class="skill">
            <q-icon size="40px" :name="skill.icon" :color="skill.color"></q-icon>
            <span class="title-skill">
              {{ skill.name }}
            </span>
          </div>
        </section>
      </section>

      <section class="skills-schem" style="background-color: rgba(0, 128, 0, 0.1)">
        <div class="title-icon">
          <h4>Good Practicess</h4>
          <q-icon name="check_circle" size="150px" class="section-icon" color="green" />
        </div>
        <q-separator color="white" :vertical="$q.screen.width > 1200" />

        <section class="grid-skills">
          <div v-for="(skill, index) in skills.goodPractice" :key="index" class="skill">
            <q-icon size="40px" :name="skill.icon" :color="skill.color"></q-icon>
            <span class="title-skill">
              {{ skill.name }}
            </span>
          </div>
        </section>
      </section>
    </section>
    <section class="filosofy-grid">
      <h4 class="section-tittle">Mi filosofia y valores</h4>
      <section class="grid-valors">
        <div class="filosofy">
          <q-icon name="school" size="40px" />
          <span class="title-skill">Aprendizaje continuo</span>
        </div>

        <div class="filosofy">
          <q-icon name="bolt" size="40px" />
          <span class="title-skill">Esfuerzo y dedicación</span>
        </div>

        <div class="filosofy">
          <q-icon name="group" size="40px" />
          <span class="title-skill">Trabajo en equipo</span>
        </div>

        <div class="filosofy">
          <q-icon name="code" size="40px" />
          <span class="title-skill">Código limpio y reutilizable</span>
        </div>

        <div class="filosofy">
          <q-icon name="trending_up" size="40px" />
          <span class="title-skill">Búsqueda de la mejora continua</span>
        </div>

        <div class="filosofy">
          <q-icon name="diversity_3" size="40px" />
          <span class="title-skill">Respeto e integración</span>
        </div>
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
      <h4 class="section-tittle">Social y CV</h4>
      <section class="grid-valors">
        <div class="filosofy">
          <q-btn
            flat
            round
            color="grey-8"
            icon="mdi-file-document"
            href="../../public/filles/vicente-lozano-hervas-3-6-25.pdf"
            target="_blank"
            download
          />
          <span class="title-skill">Curriculum</span>
        </div>
        <div class="filosofy">
          <q-btn
            flat
            round
            size="20px"
            color="white"
            icon="mdi-github"
            href="https://github.com/vicentlozano"
            target="_blank"
          />
          <span class="title-skill">Github</span>
        </div>
        <div class="filosofy">
          <q-btn
            flat
            round
            size="20px"
            color="blue-10"
            icon="mdi-linkedin"
            href="https://www.linkedin.com/in/vicent-lozano-hervas-9bb498187"
            target="_blank"
          />
          <span class="title-skill">Linkedin</span>
        </div>
        <div class="filosofy">
          <q-btn
            flat
            round
            size="20px"
            color="blue"
            icon="mdi-facebook"
            href="https://www.facebook.com/vicentlozano"
            target="_blank"
          />
          <span class="title-skill">Facebook</span>
        </div>
        <div class="filosofy">
          <q-btn
            flat
            round
            size="20px"
            color="pink"
            icon="mdi-instagram"
            href="https://www.instagram.com/vicentlozano94"
            target="_blank"
          />
          <span class="title-skill">Instagram</span>
        </div>
        <div class="filosofy">
          <q-btn
            flat
            round
            size="20px"
            color="purple-7"
            icon="fab fa-discord"
            href="https://discord.gg/u6UVmpnA"
            target="_blank"
          />
          <span class="title-skill">Discord</span>
        </div>
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
type Skill = {
  name: string;
  icon: string;
  color: string;
};

type SkillCategory = {
  [category: string]: Skill[];
};

const skills: SkillCategory = {
  languages: [
    { name: 'JavaScript (ES6+)', icon: 'mdi-language-javascript', color: 'yellow-10' },
    { name: 'HTML5', icon: 'mdi-language-html5', color: 'deep-orange-10' },
    { name: 'CSS3', icon: 'mdi-language-css3', color: 'blue-10' },
    { name: 'SQL', icon: 'mdi-database', color: 'yellow-10' },
    { name: 'NoSQL', icon: 'mdi-database-outline', color: 'green-10' },
    { name: 'Python', icon: 'mdi-language-python', color: 'blue-10' },
    { name: 'Dart', icon: 'fab fa-dart-lang', color: 'blue-6' },
    {
      name: 'TypeScript',
      icon: 'mdi-language-typescript',
      color: 'blue-10',
    },
  ],

  frontend: [
    { name: 'Vue.js 2 y 3', icon: 'mdi-vuejs', color: 'light-green-10' },
    { name: 'Vue Router', icon: 'mdi-router-wireless', color: 'cyan-10' },
    { name: 'Pinia / Vuex', icon: 'mdi-database-sync', color: 'purple-8' },
    { name: 'Quasar Framework', icon: 'mdi-star-circle', color: 'amber-7' },
    { name: 'Composition API', icon: 'mdi-code-braces', color: 'blue-grey-7' },
    { name: 'Diseño responsivo', icon: 'mdi-cellphone-link', color: 'pink-5' },
    { name: 'Componentización', icon: 'mdi-view-grid-plus-outline', color: 'deep-purple-7' },
    { name: 'Idiomas (i18n)', icon: 'mdi-translate', color: 'purple-7' },
    { name: 'Axios', icon: 'mdi-cloud-download-outline', color: 'blue-7' },
  ],

  backend: [
    { name: 'Node.js', icon: 'mdi-nodejs', color: 'green-10' },
    { name: 'Express.js', icon: 'mdi-server', color: 'grey-8' },
    { name: 'Autenticación con JWT', icon: 'mdi-key', color: 'orange-10' },
    { name: 'Control de usuarios y roles', icon: 'mdi-account-lock', color: 'red-9' },
    { name: 'APIs REST', icon: 'mdi-api', color: 'deep-purple-10' },
    { name: 'WebSockets / MQTT', icon: 'mdi-access-point-network', color: 'light-blue-10' },
    { name: 'Subida de archivos', icon: 'mdi-file-upload-outline', color: 'amber-10' },
  ],

  devops: [
    { name: 'Git', icon: 'mdi-git', color: 'red-10' },
    { name: 'GitHub / Actions', icon: 'mdi-github', color: 'grey-10' },
    { name: 'CI/CD', icon: 'mdi-rocket-launch', color: 'purple-10' },
    { name: 'Docker', icon: 'mdi-docker', color: 'blue-10' },
    { name: 'Docker Compose', icon: 'mdi-file-cog', color: 'indigo-7' },
    { name: 'PM2', icon: 'mdi-cogs', color: 'brown-7' },
    { name: 'Nginx', icon: 'mdi-server-network', color: 'blue-grey-8' },
  ],

  cloud: [
    { name: 'AWS EC2', icon: 'mdi-aws', color: 'orange-8' },
    { name: 'AWS S3', icon: 'mdi-aws', color: 'orange-8' },
    { name: 'AWS RDS', icon: 'mdi-database', color: 'indigo-10' },
    { name: 'AWS ECS', icon: 'mdi-cloud-outline', color: 'light-blue-9' },
    { name: 'Azure App Services', icon: 'mdi-microsoft-azure', color: 'blue-9' },
    { name: 'Azure Static Web', icon: 'mdi-microsoft-azure-devops', color: 'indigo-8' },
  ],

  goodPractice: [
    { name: 'Código limpio', icon: 'mdi-code-tags-check', color: 'green-8' },
    { name: 'Principios SOLID', icon: 'mdi-scale-balance', color: 'amber-9' },
    { name: 'Testing', icon: 'fas fa-flask', color: 'deep-orange-7' },
    { name: 'Arquitectura MVC', icon: 'mdi-view-dashboard-outline', color: 'blue-grey-7' },
    { name: 'Microservicios', icon: 'mdi-lan', color: 'cyan-9' },
  ],
};

//computed
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
  background-repeat: no-repeat;
  background-size: cover;

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
  gap: 2rem;
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

/* skills */
.skills {
  display: flex;
  flex-direction: column;
  background-color: rgba(150, 136, 136, 0.316);
  h4 {
    color: white;
    font-weight: bold;
  }
}
.skills-schem {
  display: grid;
  grid-template-columns: 1.4fr 0.3fr 3fr;
  grid-template-rows: 1fr;
  padding: 2rem;
  gap: 2rem;
  background-color: rgba(240, 248, 255, 0.096);
}

.grid-skills {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.4rem;
  place-items: center;
}
.skill {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.418);
  padding: 1rem;
  background-color: rgba(14, 13, 13, 0.188);
  border-radius: 15px;
  width: 200px;
  box-shadow: 0px 3px 9px rgba(213, 209, 209, 0.3);
  height: 150px;
  text-align: center;

  color: white;
  font-weight: bold;
}
.title-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* fylosofy */
.filosofy-grid {
  display: flex;
  flex-direction: column;
}
.grid-valors {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(400px, 1fr);
  height: min-content;
}
.filosofy {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.418);
  padding: 1rem;
  background-color: rgba(14, 13, 13, 0.188);
  box-shadow: 0px 3px 9px rgba(213, 209, 209, 0.3);
  color: white;
  font-weight: bold;
}
/* actions */
.mobile-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
  .skills-schem {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content 1fr;
  }
  .grid-valors {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(300px, 1fr);
  }
}
@media (max-width: 500px) {
  .skill {
    gap: 0.4rem;
    width: 150px;
    height: 150px;
    color: white;
    padding: 1rem;
    border: none;
  }
  .grid-skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
    place-items: center;
    white-space: nowrap;
  }
  .grid-valors {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(200px, 1fr);
  }
}
</style>
