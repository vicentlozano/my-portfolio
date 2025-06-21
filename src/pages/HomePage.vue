<template>
  <div class="main">
    <section class="presentation">
      <article class="text-presentation">
        <h3 class="title">
          Hola, soy Vicente<br />
          desarrollador full-stack 👋
        </h3>
        <p class="subtitle">Especializado en Javascript, Vue.js, Quasar y Node.js</p>
      </article>
      <q-avatar class="custom-avatar" size="250px">
        <img src="../assets/yop.JPG" class="yop" />
      </q-avatar>
    </section>
    <section class="portfolio">
      <div class="ask">
        <q-icon name="mdi-folder-outline" size="50px" color="white"></q-icon>
        <span class="text-ask">¿QUIERES VER TODOS MIS PROYECTOS?</span>
      </div>

      <div class="actions">
        <router-link to="/projects" class="button-router"> MIS PROYECTOS </router-link>
        <router-link to="/aboutme" class="button-router"> CONÓCEME MEJOR</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

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
  grid-template-columns: 1fr 300px;
  background-color: rgba(255, 255, 255, 0.058);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(113, 145, 166, 0.4);
  gap: 2rem;
}
.text-presentation {
  text-align: start;
  color: whitesmoke;
  font-size: 2em;
  padding-left: 2rem;
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
</style>
