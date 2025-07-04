<template>
  <div class="project">
    <section class="carrusel" v-if="!actions">
      <q-carousel swipeable animated v-model="slide" thumbnails infinite class="carousel-bg">
        <q-inner-loading :showing="loadingImages">
          <q-spinner color="primary" size="50px" />
        </q-inner-loading>
        <q-carousel-slide
          v-for="(img, index) in props.project.img"
          :key="img + index"
          :name="index"
          :img-src="img"
          @img-loaded="index === 0 && onImgLoad()"
        >
          <div class="absolute-top text-subtitle1 text-center caption">
            <a class="link" :href="project.finish ? project.url : null"
              >{{ project.title.toUpperCase() }}
            </a>
          </div>
          <div v-if="!finish" class="absolute-center text-subtitle1 text-center text-white">
            <h3>
              Working on <span class="dot">.</span>
              <span class="dot">.</span>
              <span class="dot">.</span>
            </h3>
          </div>
          <div class="absolute-top-right info-icon">
            <q-icon name="info" size="30px" @click="actions = !actions">
              <q-tooltip
                class="bg-indigo"
                transition-show="flip-right"
                transition-hide="flip-left"
                anchor="bottom middle"
                self="bottom middle"
                :offset="[40, 40]"
              >
                <strong>{{ t('details') }}</strong>
              </q-tooltip>
            </q-icon>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>
    <section class="info" v-else>
      <div class="absolute-top-left back-icon">
        <q-btn
          :size="$q.screen.width < 450 ? '11px' : '15px'"
          round
          icon="mdi-arrow-left"
          color="grey-8"
          @click="actions = !actions"
        />
      </div>
      <section class="title">
        {{ project.title.toUpperCase() }}
        <span class="subtitle">{{ t(project.subtitle) }}</span>
      </section>

      <section class="details">
        <div class="acces">
          <span class="title-tech">{{ t('platforms') }}</span>
          <div class="platforms">
            <q-btn
              v-for="platform in project.platforms"
              :key="platform"
              class="platform"
              :disable="!finish"
              :icon="platform.name"
              :label="platform.name"
              stack
              align="center"
              :style="{
                backgroundColor: platformColors[platform.name as keyof typeof platformColors],
                color: 'white',
              }"
              text-color="white"
              unelevated
              :href="platform.url"
              target="_blank"
            />
          </div>
        </div>
        <div class="acces-repository">
          <span class="title-tech" v-if="$q.screen.width > 700">{{ t('repository') }}</span>
          <div class="repository">
            <a :href="project.repository" target="_blank" class="github-link">
              <q-icon name="mdi-github" :size="$q.screen.width > 700 ? '60px' : '30px'"></q-icon>
              🔗 {{ t('seeRepository') }}
            </a>
          </div>
        </div>
      </section>
      <section class="technologies">
        <span class="title-tech">{{ t('technology') }}</span>
        <div class="grid-tech">
          <div class="tech" v-for="technology in project.technologies" :key="technology.name">
            <q-icon :name="technology.icon" size="30px" />
            <span>{{ technology.name }}</span>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

//props&emits
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  finish: {
    type: Boolean,
    required: true,
  },
});
//data
const { t } = useI18n();
const $q = useQuasar();
const slide = ref(0);
const actions = ref(false);
const loadingImages = ref(true);
const platformColors: { android: string; ios: string; web: string } = {
  android: '#388e3c',
  ios: '#424242',
  web: '#3949ab',
};

//methods
function onImgLoad() {
  loadingImages.value = false;
}
</script>

<style scoped>
.project {
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  width: 100%;
  background-color: rgba(250, 243, 243, 0.928);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.418);
  background-color: rgba(14, 13, 13, 0.188);
  border-radius: 15px;
  box-shadow: 0px 3px 9px rgba(213, 209, 209, 0.3);
}
.carrusel,
.carousel-bg {
  background: #181818 !important;
  min-height: 400px;
}
.caption {
  width: 100%;
  padding: 1rem;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  letter-spacing: 1.4px;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.3);
}

.link {
  text-decoration: none;
  color: whitesmoke;
}
.info {
  display: grid;
  grid-template-rows: min-content 2fr 1fr;
  text-align: center;
  place-items: center;
  min-height: 400px;
  width: 100%;
  color: white;
  background-color: rgba(185, 178, 178, 0.073);
  backdrop-filter: blur(20px);
}

.info-icon {
  padding: 1rem;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  letter-spacing: 1.4px;
  cursor: pointer;
}
.back-icon {
  padding: 1rem;
  cursor: pointer;
}
.dot {
  opacity: 0;
  animation-name: blink;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0%,
  20% {
    opacity: 0;
  }
  50%,
  100% {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.animated-element {
  animation: pulse 8s ease-in-out infinite;
}
.title {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  padding: 1rem;
  background-color: rgba(30, 32, 32, 0.879);
  width: 100%;
}
.subtitle {
  font-size: 0.5em;
  font-weight: 300;
  letter-spacing: 0;
}
.technologies {
  display: grid;
  grid-template-rows: min-content 1fr;
  background-color: rgba(30, 32, 32, 0.879);
  height: 100%;
  width: 100%;
}
.title-tech {
  text-align: center;
  font-weight: bold;
  font-size: 1em;
  padding: 0.3rem;
  letter-spacing: 0.2em;
  background-color: rgba(255, 255, 255, 0.883);
  color: black;
  width: 100%;
}
.grid-tech {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  place-items: center;
}
.details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
}
.acces {
  display: grid;
  grid-template-rows: min-content 1fr;
  width: 100%;
  height: 100%;
  place-items: center;
}
.acces-repository {
  display: grid;
  grid-template-rows: min-content 1fr;
  width: 100%;
  height: 100%;
  place-items: center;
}

.platforms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  height: 100%;
  width: 100%;
}
.repository {
  display: flex;
  flex-direction: column;
  place-content: center;
  height: 100%;
  width: 100%;
}
.github-link {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  padding: 1em;
  text-decoration: none;
  height: 100%;
  width: 100%;
  background-color: #2b3239;
  font-weight: bold;
  color: #1280fc;
  transition: background 0.3s;
}

.github-link:hover {
  color: white;
}
.platform {
  border: none;
  border-radius: 0px;
}
.tech {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 0.3rem;
}
@media (max-width: 700px) {
  .details {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;
    width: 100%;
    height: 100%;
  }
  .acces-repository {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
    place-items: center;
  }
  .github-link {
    display: flex;
    flex-direction: row;
    place-content: center;
    gap: 2rem;
    width: 100%;
  }
}
@media (max-width: 450px) {
  .back-icon {
    padding-top: 1.3rem;
  }
}
</style>
