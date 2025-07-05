<template>
  <div class="post-grid">
    <PostBlogComponent v-for="post in typedPosts" :key="post.title" :post="post" />
  </div>
  <RouterView/>
</template>

<script setup lang="ts">
import PostBlogComponent from 'src/components/PostBlogComponent.vue';
import posts from 'src/posts/posts.json'; // Importas el JSON directamente

type Post = {
  title: string;
  img: string;
  postedBy: string;
  date: string;
  sectionClass: string;
  intro: string;
  article?: string;
};

const typedPosts: Post[] = posts;
</script>

<style scoped>
.post-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1rem;
  padding: 2rem;
}

.no-yet {
  display: grid;
  place-items: center;
  backdrop-filter: blur(20px);
}

.comment {
  text-align: center;
  color: whitesmoke;
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
@media (min-width: 801px) and (max-width: 1300px) {
 .post-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 1rem;
  padding: 2rem;
}
  
}
@media (max-width: 800px) {
  .post-grid {
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap: 1rem;
  padding: 2rem;
}
  }
</style>
