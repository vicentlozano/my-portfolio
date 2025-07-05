<template>
  <div class="backdiv" v-if="post">
    <section class="head">
      <span class="title">{{ t(post.title) }}</span>
      <section class="info">
        <span
          >{{ t('postedBy') + post.postedBy }} | {{ post.date }} | {{ t(post.sectionClass) }}</span
        >
      </section>
    </section>
    <div class="post">
      <div class="hiden"><img class="post-img" :src="getImageUrl(post.img)" /></div>
      <q-separator  color="black" inset  style="margin-right: 30%; margin-left: 30%;" />

      <section class="text">
        <article class="article" v-html="formattedArticle"></article>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import posts from 'src/posts/posts.json';
import { computed } from 'vue';

type Post = {
  title: string;
  img: string;
  postedBy: string;
  date: string;
  sectionClass: string;
  intro: string;
  article?: string;
};

//data
const { t } = useI18n();
const props = defineProps({
  title: String,
});

//methods
function getImageUrl(img: string) {
  return new URL(`../assets/${img}`, import.meta.url).href;
}
const formattedArticle = computed(() => {
  if (!post.value || !post.value.article) return '';
  const translated = t(post.value.article);
  if (!translated) return '';

  return translated
    .split('\n\n')
    .map(paragraph => `<p>${paragraph}</p>`)
    .join('');
});

const post = computed<Post | undefined>(() => posts.find((p: Post) => p.title === props.title));
</script>

<style scoped>
.backdiv {
  display: flex;
  flex-direction: column;
  background-color: white;
  place-content: center;
  width: 100%;
  height: 100%;
}
.head {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  align-items: center;
  text-align: center;
  background-color: rgb(229, 224, 218);
  text-transform: uppercase;
}
.post {
  display: grid;
  background-color: white;
  justify-self: center;
  grid-template-rows: 400px min-content min-content;
  width: 100%;
  gap: 3rem;
  padding-top: 3rem;
  height: 100%;
}
.info {
  padding: 0rem 2rem;
  align-self: center;
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
  max-width: 1000px;
  justify-self: center;
}
.title {
  font-size: 1.5em;
  letter-spacing: 1.7px;
  color: rgb(35, 33, 33);
  font-weight: 600;
}
.hiden {
  overflow: hidden;
  width: 1000px;
  justify-self: center;
}
.post-img {
  height: 100%;
  width: 100%;
}
.article {
  text-align: justify;
  line-height: 1.6;
  font-size: 1rem;
  color: #333;
}
@media (min-width:601px) and (max-width: 1100px) {
  .head {
    display: flex;
    flex-direction: column;
    padding: 1rem 0.3rem;
    gap: 0.5rem;
  }
  .hiden {
    overflow: hidden;
    width: 100%;
    justify-self: center;
  }
  .post {
    grid-template-rows: 400px min-content min-content;
    padding-top: 0rem;
  }
}
@media (max-width: 600px) {
  .head {
    display: flex;
    flex-direction: column;
    padding: 1rem 0.3rem;
    gap: 0.5rem;
  }
  .hiden {
    overflow: hidden;
    width: 100%;
    justify-self: center;
  }
  .post {
    grid-template-rows: 300px min-content min-content;
    padding-top: 0;
  }
}
</style>
