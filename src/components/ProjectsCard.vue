<template>
  <div class="project">
    <section class="carrusel" v-if="!actions">
      <q-carousel swipeable animated v-model="slide" thumbnails infinite>
        <q-carousel-slide
          v-for="(img, index) in props.project.img"
          :key="img + index"
          :name="index"
          :img-src="img"
        >
          <div class="absolute-top text-subtitle1 text-center caption">
            <a class="link" :href="project.url">{{ project.title }}</a>
          </div>
          <div class="absolute-top-right info-icon">
            <q-icon name="info" size="30px" @click="actions = !actions" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>
    <section class="info" v-else>
      <div class="absolute-top-left info-icon" style="padding: 1.7rem">
        <q-btn round icon="mdi-arrow-left" color="grey-8" @click="actions = !actions" />
      </div>
      <section class="title">
        {{ project.title.toUpperCase() }}
        <span class="subtitle">Empieza a volar!</span>
      </section>
      <section class="text-project">Hola me llamo pepe</section>
      <section class="technologies">
        <span class="title-tech">TECNOLOGIAS</span>
        <div class="grid-tech">
          <q-icon
            v-for="technology in project.technologies"
            :key="technology.name"
            :name="technology.icon"
            size="30px"
          />
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
//props&emits
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
//data
const slide = ref(1);
const actions = ref(false);
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
  grid-template-rows: min-content 2fr 2fr;
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
  animation: 1s ;
}
.title {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  padding: 1rem;
  background-color: rgba(217, 220, 219, 0.096);
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
  height: 100%;
  width: 100%;
}
.title-tech {
  text-align: center;
  font-weight: bold;
  font-size: 1em;
  padding: 1rem;
  letter-spacing: 0.2em;
  background-color: rgba(255, 255, 255, 0.883);
  color: black;
  width: 100%;
}
.grid-tech {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  place-items: center;
}
</style>
