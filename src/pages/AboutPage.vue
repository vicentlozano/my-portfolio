<template>
  <div class="main">
    <section class="hellow">
      <div class="intro">
        <section class="text">
          <div class="first">
            <span class="text-intro">{{ t('heyMyName') }}</span>
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
            {{ t('textDes') }}
          </p>
          <span class="findme">{{ t('findMe') }}</span>
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
        <h4 class="title-from">{{ t('origin') }}</h4>
      </div>
      <div class="where-text">
        <span class="from-subtitle">{{t('fromCalpe')}}💙</span>
        <article class="text-from">
          <span>
           {{ t('year31') }}<br />
            <br />
            {{ t('grow') }}
          </span>
        </article>
      </div>
    </section>
    <h4 class="section-tittle">{{ t('mySkills') }}</h4>
    <section class="skills">
      <section class="skills-schem" style="background-color: rgba(21, 100, 0, 0.1)">
        <div class="title-icon">
          <h4>{{t('progLang')}}</h4>
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
          <h4>{{t('goodPrac')}}</h4>
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
      <h4 class="section-tittle">{{ t('myFilosofy') }}</h4>
      <section class="grid-valors">
        <div class="filosofy">
          <q-icon name="school" size="40px" />
          <span class="title-skill">{{t('continuousLearning')}}</span>
        </div>

        <div class="filosofy">
          <q-icon name="bolt" size="40px" />
          <span class="title-skill">{{t('effortAndDedication')}}</span>
        </div>

        <div class="filosofy">
          <q-icon name="group" size="40px" />
          <span class="title-skill">{{t('teamwork')}}</span>
        </div>

        <div class="filosofy">
          <q-icon name="code" size="40px" />
          <span class="title-skill">{{t('cleanAndReusableCode')}}</span>
        </div>

        <div class="filosofy">
          <q-icon name="trending_up" size="40px" />
          <span class="title-skill">{{t('continuousImprovement')}}</span>
        </div>

        <div class="filosofy">
          <q-icon name="diversity_3" size="40px" />
          <span class="title-skill">{{t('respectAndInclusion')}}</span>
        </div>
      </section>
    </section>
    <section class="timeline">
      <div class="q-px-lg q-py-md">
        <q-timeline :layout="layout" color="secondary">
          <q-timeline-entry heading> {{t('lastSteps')}} </q-timeline-entry>

          <q-timeline-entry :title=" t('dawStartTitle') " :subtitle="t('dawStartSubtitle')" side="left">
            <div>
              {{t('dawStartDesc')}}
            </div>
          </q-timeline-entry>

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
            :title="t('dawEndTitle')"
            :subtitle="t('dawEndSubtitle')"
            side="left"
            color="orange"
            icon="done_all"
          >
            <div>
            {{t('dawEndDesc')}}
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            :title="t('flutterCourseTitle')"
            :subtitle="t('flutterCourseSubtitle')"
            side="right"
            icon="smartphone"
          >
            <div>
            {{t('flutterCourseDesc')}}
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
          <q-timeline-entry
            :title="t('damStartTitle')"
            :subtitle="t('damStartSubtitle')"
            side="left"
            icon="school"
          >
            <div>
              {{t('damStartDesc')}}
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </section>
    <section class="social">
      <h4 class="section-tittle">Social {{t('and')}} CV</h4>
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
          <span class="title-skill">CV</span>
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
        <span class="text-ask">{{t('discoverProjects')}}</span>
      </div>

      <div :class="$q.screen.width > 900 ? 'actions' : 'mobile-actions'">
        <router-link to="/projects" class="button-router"> {{t('myProjects')}}</router-link>

        <router-link to="/contact" class="button-router"> {{ t('talk') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

//data
const $q = useQuasar();
const { t } = useI18n();





const skills = computed(() => ({
  languages: [
    { name: 'JavaScript (ES6+)', icon: 'mdi-language-javascript', color: 'yellow-10' },
    { name: 'HTML5', icon: 'mdi-language-html5', color: 'deep-orange-10' },
    { name: 'CSS3', icon: 'mdi-language-css3', color: 'blue-10' },
    { name: 'SQL', icon: 'mdi-database', color: 'yellow-10' },
    { name: 'NoSQL', icon: 'mdi-database-outline', color: 'green-10' },
    { name: 'Python', icon: 'mdi-language-python', color: 'blue-10' },
    { name: 'Dart', icon: 'fab fa-dart-lang', color: 'blue-6' },
    { name: 'TypeScript', icon: 'mdi-language-typescript', color: 'blue-10' },
  ],
  frontend: [
    { name: t('vue23'), icon: 'mdi-vuejs', color: 'light-green-10' },
    { name: 'Vue Router', icon: 'mdi-router-wireless', color: 'cyan-10' },
    { name: 'Pinia / Vuex', icon: 'mdi-database-sync', color: 'purple-8' },
    { name: 'Quasar Framework', icon: 'mdi-star-circle', color: 'amber-7' },
    { name: t('compositionApi'), icon: 'mdi-code-braces', color: 'blue-grey-7' },
    { name: t('responsiveDesign'), icon: 'mdi-cellphone-link', color: 'pink-5' },
    { name: t('componentization'), icon: 'mdi-view-grid-plus-outline', color: 'deep-purple-7' },
    { name: t('languagesI18n'), icon: 'mdi-translate', color: 'purple-7' },
    { name: 'Axios', icon: 'mdi-cloud-download-outline', color: 'blue-7' },
  ],
  backend: [
    { name: 'Node.js', icon: 'mdi-nodejs', color: 'green-10' },
    { name: 'Express.js', icon: 'mdi-server', color: 'grey-8' },
    { name: t('jwtAuth'), icon: 'mdi-key', color: 'orange-10' },
    { name: t('userRoleControl'), icon: 'mdi-account-lock', color: 'red-9' },
    { name: t('restApis'), icon: 'mdi-api', color: 'deep-purple-10' },
    { name: t('websocketsMqtt'), icon: 'mdi-access-point-network', color: 'light-blue-10' },
    { name: t('fileUpload'), icon: 'mdi-file-upload-outline', color: 'amber-10' },
  ],
  devops: [
    { name: 'Git', icon: 'mdi-git', color: 'red-10' },
    { name: 'GitHub / Actions', icon: 'mdi-github', color: 'grey-10' },
    { name: 'CI/CD', icon: 'mdi-rocket-launch', color: 'purple-10' },
    { name: 'Docker', icon: 'mdi-docker', color: 'blue-10' },
    { name: t('dockerCompose'), icon: 'mdi-file-cog', color: 'indigo-7' },
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
    { name: t('cleanCode'), icon: 'mdi-code-tags-check', color: 'green-8' },
    { name: t('solidPrinciples'), icon: 'mdi-scale-balance', color: 'amber-9' },
    { name: t('testing'), icon: 'fas fa-flask', color: 'deep-orange-7' },
    { name: t('mvcArchitecture'), icon: 'mdi-view-dashboard-outline', color: 'blue-grey-7' },
    { name: t('microservices'), icon: 'mdi-lan', color: 'cyan-9' },
  ],
}));

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
