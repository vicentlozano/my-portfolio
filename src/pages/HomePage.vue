<template>
  <div class="main">
    <section class="presentation">
      <article class="text-presentation">
        <div class="first"><span class="hey">HOLA👋,</span></div>
        <section class="typing-text">
          <span class="typing-text-content">{{ displayedText }}</span>
        </section>
      </article>
      <div class="next">
        <q-btn class="button-scroll" flat round color="white" icon="mdi-arrow-down" @click="scrollBottom"></q-btn>
      </div>
      <!-- <q-avatar class="custom-avatar" size="250px">
        <img src="../assets/yop.JPG" class="yop" />
      </q-avatar> -->
    </section>
    <section :class="$q.screen.width > 900 ? 'portfolio' : 'mobile-portfolio'">
      <div :class="$q.screen.width > 900 ? 'ask' : 'mobile-ask'">
        <q-icon name="mdi-folder-outline" size="50px" color="white"></q-icon>
        <span class="text-ask">¿QUIERES VER TODOS MIS PROYECTOS?</span>
      </div>

      <div :class="$q.screen.width > 900 ? 'actions' : 'mobile-actions'">
        <router-link to="/projects" class="button-router"> MIS PROYECTOS </router-link>
        <router-link to="/aboutme" class="button-router"> CONÓCEME MEJOR</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useQuasar } from 'quasar';

//data
const $q = useQuasar();
const phrases = [
  '¡Bienvenidos a Vilodev!',
  'Soy Vicent Lozano',
  'Desarrollador full-stack web, Android e iOS',
  'Especializado en Javascript, Vue.js, Quasar, Node.js y Flutter',
];
const currentPhraseIndex = ref(0);
const displayedText = ref('');
let charIndex = 0;
let isDeleting = false;

//methods
const scrollBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'  // para un scroll suave
  });
};
const typeEffect = () => {
  const currentPhrase = phrases[currentPhraseIndex.value]!;

  if (!isDeleting) {
    // Escriure lletres
    displayedText.value = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      // Esperar i començar a esborrar
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Esperar 2s abans d'esborrar
      return;
    }
  } else {
    // Esborrar lletres
    displayedText.value = currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length;
    }
  }

  // Control de la velocitat
  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
};

onMounted(() => {
  typeEffect();
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.main {
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 100%;
  height: auto;
}
.presentation {
  padding: 2rem;
  height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  grid-template-rows: 1fr min-content;
  background-color: rgba(255, 255, 255, 0.058);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(113, 145, 166, 0.4);
  gap: 2rem;
}
.first {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: whitesmoke;
}

.hey {
  padding: 1rem 2rem;
  font-size: 1.6em;
  color: whitesmoke;
  background-color: rgb(37, 127, 191);
  border-radius: 8px;
  display: inline-block;
  white-space: nowrap; /* Manté tot en una línia */
}
.text-presentation {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  text-align: center;
  color: whitesmoke;
  font-size: 2em;
}
.custom-avatar {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
.yop {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title {
  display: block;
  font-family: monospace;
  white-space: nowrap;
  border-right: 4px solid;
  width: 45ch;
  text-align: justify;
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
.mobile-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.typing-text {
  text-align: center;
  font-size: 1em;
  color: white;
  min-height: 3em;
  font-family: monospace;
}
.button-scroll {
  animation: fade-opacity 2s ease-in-out infinite;
}

@keyframes fade-opacity {
  0%, 100% {
    opacity: 1;     /* totalmente visible */
  }
  50% {
    opacity: 0.0;   /* semitransparente */
  }
}
@keyframes blinkCursor {
  50% {
    border-color: transparent;
  }
}
@media(max-width: 800px){
  .presentation {
  padding: 1rem;
  height: calc(100vh - 8rem);

}
}

</style>
