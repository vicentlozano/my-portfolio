<template>
  <div class="mini-post" @click="goToPage(post.title)">
    <div class="hiden"><img class="post-img" :src="getImageUrl(props.post.img)" /></div>
    <q-separator color="black" inset />
    <section class="info">
      <span
        >{{ t('postedBy') + props.post.postedBy }} | {{ post.date }} |
        {{ t(post.sectionClass) }}</span
      >
    </section>
    <section class="text">
      <span class="title">{{ t(post.title) }}</span> <span class="intro">{{ t(post.intro) }}</span>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
const props = defineProps({
  post: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      img: '',
      postedBy: '',
      date: '',
      sectionClass: '',
      intro: '',
    }),
  },
});
//data
const { t } = useI18n();
const router = useRouter()
;//methods
function getImageUrl(img: string) {
  return new URL(`../assets/${img}`, import.meta.url).href;
}
const goToPage = (titleChild:string)=> {
// eslint-disable-next-line @typescript-eslint/no-floating-promises
router.push({name:'post', params: {title: titleChild}})
}
</script>

<style scoped>
.mini-post {
  display: grid;
  grid-template-rows: 300px min-content min-content;
  justify-self: center;
  height: min-content;
  width: 100%;
  max-width: 900px;
  gap: 0.5rem;
  border-radius: 15px;
  box-shadow: 0px 3px 10px rgb(194, 181, 181);
  overflow: hidden;
  background-color: white;
  cursor: pointer;
}
.mini-post:hover img{
  transform: scale(1.05);
      filter: grayscale(100%);

}

.post-img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 0.3s ease-in-out;
}

.info {
  padding: 0rem 2rem;
  text-align: justify;
  letter-spacing: 2px;
  font-size: 0.9em;
  text-transform: uppercase;
}
.text {
  padding: 0rem 2rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.3rem;
}
.title {
  font-size: 1.3em;
  letter-spacing: 1.4px;
  font-weight: bold;
}
.hiden{
  overflow: hidden;
}
</style>
