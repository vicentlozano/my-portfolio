<template>
  <div class="main">
    <section class="presentation">
      <article class="text-presentation">
        <span class="hey">{{ t('hello') }}</span>
        <span class="subtitle">{{ t('developer') }}</span>
        <img
          src="../assets/avataaars.svg"
          alt="Avatar"
          class="avatar"
          :style="$q.screen.width < 500 || $q.screen.height < 700? { width: '170px', height: '170px' } : {}"
        />
      </article>
      <div class="center-img">
        <section class="typing-text">
          <span class="typing-text-content">{{ displayedText }}</span>
        </section>
        <div class="next">
          <q-icon
            class="button-scroll"
            flat
            square
            :size="$q.screen.width > 500 ? '30px' : '20px'"
            name="mdi-chevron-down"
            @click="scrollBottom"
          ></q-icon>
        </div>
      </div>
    </section>
    <section :class="$q.screen.width > 900 ? 'portfolio' : 'mobile-portfolio'">
      <div :class="$q.screen.width > 900 ? 'ask' : 'mobile-ask'">
        <q-icon name="mdi-folder-outline" size="50px" color="white"></q-icon>
        <span class="text-ask">{{ t('seeProjects') }}</span>
      </div>

      <div :class="$q.screen.width > 900 ? 'actions' : 'mobile-actions'">
        <router-link to="/projects" class="button-router">{{ t('myProjects') }}</router-link>
        <router-link to="/aboutme" class="button-router"> {{ t('knowMe') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const { t, locale } = useI18n();

const currentPhraseIndex = ref(0);
const displayedText = ref('');
let charIndex = 0;
let isDeleting = false;
let typingTimeout: ReturnType<typeof setTimeout> | null = null;

// Frases reactives que cambian cuando cambia el idioma
const phrases = computed(() => [t('helowText'), t('skillsMessage'),t('takeALook')]);

const scrollBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
};

const typeEffect = () => {
  const currentPhrase = phrases.value[currentPhraseIndex.value] || '';

  if (!isDeleting) {
    displayedText.value = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      typingTimeout = setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    displayedText.value = currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.value.length;
    }
  }

  const speed = isDeleting ? 50 : 100;
  typingTimeout = setTimeout(typeEffect, speed);
};

const startTyping = () => {
  // Reset states
  currentPhraseIndex.value = 0;
  charIndex = 0;
  isDeleting = false;
  if (typingTimeout) clearTimeout(typingTimeout);
  typeEffect();
};

// Lanzar typing al montar
onMounted(() => {
  startTyping();
});

// Reiniciar typing cuando cambie el idioma para actualizar frases
watch(locale, () => {
  startTyping();
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
}
.presentation {
  height: calc(100vh - 3.5rem);
  display: grid;
  justify-self: center;
  place-items: center;
  grid-template-rows: 4fr 2fr;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(113, 145, 166, 0.4);
  gap: 2rem;
}

.logo {
  max-width: 80%;
  max-height: 300px;
  object-fit: contain;
}
.avatar {
  padding-top: 2rem;
}

.first {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.hey {
  padding: 1rem 2rem;
  font-size: 3em;
  background-color: rgba(37, 127, 191, 0);
  border-radius: 8px;
  display: flex;
  text-wrap: wrap;
  height: 100%;
  align-items: center;
  text-align: center;
}
.text-presentation {
  display: grid;
  grid-template-rows: min-content min-content min-content;
  gap: 0rem;
  text-align: center;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  align-content: center;
  justify-items: center;
  padding: 1rem 2rem;
  font-size: 1.4em;
  font-weight: bold;
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
.next {
  padding: 1rem;
}
.portfolio {
  display: grid;
  height: 8rem;
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
  font-size: 2em;
  min-height: 3em;
  max-width: 1200px;

  font-family: monospace;
}
.button-scroll {
  animation: 3s fade ease-in-out infinite;
  border-radius: 7px;
  padding: 0.5rem;
}
.button-scroll:hover {
  color: white;
  background-color: black;
  animation: unset;
}
@keyframes fade {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
.logo {
  height: 300px;
  width: 400px;
}
.typing-text {
  text-align: center;
  font-size: 2em;
  min-height: 3em;
  font-family: monospace;
}
.typing-text-content::after {
  content: '|';
  animation: blinkCursor 1s steps(1) infinite;
}
@keyframes blinkCursor {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.center-img {
  display: grid;
  grid-template-rows: 1fr min-content;
  padding: 1rem 1rem 3rem 1rem;
  flex-direction: column;
  justify-items: center;
  height: 100%;
  align-items: center;
  width: 100%;
}
@keyframes blinkCursor {
  50% {
    border-color: transparent;
  }
}

@media (min-width: 1400px) {
  .typing-text {
    font-size: 2.8em;
    min-height: 3em;
    font-family: monospace;
  }
}
@media (min-width:651px) and (max-width:1399px){
.typing-text {
    font-size: 1.5em;
    min-height: 3em;
    font-family: monospace;
  }
  .logo {
    height: 130px;
    width: 200px;
  }
  .hey {
    padding: 1rem 1rem;
    font-size: 2em;
  }

}
@media (max-width: 650px) {
 .presentation {
  grid-template-rows: 4fr 3fr;
 
}
.center-img {
  padding: 1rem 1rem 5rem 1rem;
  
}
  .typing-text {
    font-size: 1.5em;
    min-height: 3em;
    font-family: monospace;
  }
  .logo {
    height: 130px;
    width: 200px;
  }
  .hey {
    padding: 1rem 1rem;
    font-size: 1.5em;
  }
}

@media(max-height: 600px){
  .presentation {
    display: flex;
    flex-direction: column;
    height: auto;
 
}
}



</style>
