<template>
  <div class="principal">
    <section class="talk">
      <h2 class="title" :style="$q.screen.width < 500 ? 'margin-top:15px' : ''">¿Hablamos?</h2>
      <span class="subtitle">
        Estoy siempre abierto a nuevas ideas, proyectos y desafíos.<br />
        Si quieres construir algo juntos o simplemente charlar, ¡escríbeme!
      </span>
      <div class="contact-info">
        <div class="info-item">
          <q-icon name="mdi-account" class="icon" color="blue-6" />
          <span class="info-text">Vicent Lozano Hervás</span>
        </div>

        <div class="info-item">
          <q-icon name="mdi-email-outline" class="icon" color="red-6" />
          <span class="info-text">lozanodroid@gmail.com</span>
        </div>

        <div class="info-item">
          <q-icon name="mdi-phone" class="icon" color="green-6" />
          <span class="info-text">+34 694 50 16 62</span>
        </div>

        <div class="info-item">
          <q-icon name="mdi-map-marker" class="icon" color="black-6" />
          <span class="info-text">
            Avenida Masnou nº22, Escalera 3, 2B<br />
            Calpe (Alicante), Espanya
          </span>
        </div>
      </div>
    </section>
    <q-separator color="blue-3"></q-separator>
    <section class="grid-contact">
      <section class="location">
        <div class="section-title">
          <q-icon name="mdi-map" color="blue" size="40px"></q-icon>
          <span class="title-info">Estoy aqui</span>
        </div>
        <div style="padding: 1rem; height: 100%; width: 100%">
          <div
            id="map"
            style="width: 100%; height: 100%; border-radius: 15px"
            :style="$q.screen.width < 950 ? 'border-radius: 0px' : ''"
          ></div>
        </div>
      </section>
      <q-separator
        color="blue-3"
        v-if="$q.screen.width < 950"
        :style="$q.screen.width < 950 ? 'width: 100%' : ''"
      />
      <section class="contact">
        <section class="email-message">
          <div class="section-title">
            <q-icon name="email" color="red" size="40px"></q-icon>
            <span class="title-info">Mandame un correo!</span>
          </div>
          <FormComponent />
        </section>
      </section>
    </section>
    <q-separator color="blue-3"></q-separator>

    <section class="links-social">
      <q-btn
        flat
        round
        :size="$q.screen.width < 500 ? '14px' : '20px'"
        color="blue-10"
        icon="mdi-linkedin"
        href="https://www.linkedin.com/in/vicent-lozano-hervas-9bb498187"
        target="_blank"
      />
      <q-btn
        flat
        round
        :size="$q.screen.width < 500 ? '14px' : '20px'"
        color="white"
        icon="mdi-github"
        href="https://github.com/vicentlozano"
        target="_blank"
      />
      <q-btn
        flat
        round
        :size="$q.screen.width < 500 ? '14px' : '20px'"
        color="pink"
        icon="mdi-instagram"
        href="https://www.instagram.com/vicentlozano94"
        target="_blank"
      />
      <q-btn
        flat
        round
        :size="$q.screen.width < 500 ? '10px' : '20px'"
        color="blue"
        icon="mdi-facebook"
        href="https://www.facebook.com/vicentlozano"
        target="_blank"
      />
      <q-btn
        flat
        round
        :size="$q.screen.width < 500 ? '14px' : '20px'"
        color="red"
        icon="mdi-gmail"
        href="mailto:tu-correo@gmail.com"
      />
      <q-btn
        flat
        round
        :size="$q.screen.width < 500 ? '14px' : '20px'"
        color="green"
        icon="mdi-whatsapp"
        href="https://wa.me/34694501662"
        target="_blank"
      />
    </section>
  </div>
  
</template>

<script setup lang="ts">
import FormComponent from '../components/FormComponent.vue';
import { onMounted } from 'vue';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API;

function safeInitMap() {
  const mapDiv = document.getElementById('map');
  if (
    mapDiv &&
      // @ts-expect-error-des

    window.google &&
      // @ts-expect-error-des

    window.google.maps &&
      // @ts-expect-error-des

    typeof window.google.maps.Map === 'function'
  ) {
    initMap();
  } else {
    setTimeout(safeInitMap, 100);
  }
}

const initMap = () => {
  const myLatLng = { lat: 38.643707275390625, lng: 0.041028741747140884 };

  // @ts-expect-error-des
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 15,
  });

  // Crear contenido del InfoWindow
  const contentString = `
    <div>
      <strong>Mi ubicación</strong><br/>
      Avenida Masnou nº22, Escalera 3, 2B<br/>
      Calpe (Alicante), España<br/>
      <a href="https://www.google.com/maps/dir/?api=1&destination=38.643707275390625,0.041028741747140884" target="_blank">
        Cómo llegar
      </a>
    </div>
  `;

  // @ts-expect-error-des
  const infoWindow = new window.google.maps.InfoWindow({
    content: contentString,
  });

  // Usar AdvancedMarkerElement si está disponible
  // @ts-expect-error-des
  if (window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
    // @ts-expect-error-des
    const marker = new window.google.maps.marker.AdvancedMarkerElement({
      map,
      position: myLatLng,
      title: 'Mi ubicación',
    });

    // Mostrar InfoWindow al hacer click
    marker.addListener('click', () => {
      infoWindow.open({
        map,
        anchor: marker,
      });
    });
  } else {
    // Fallback para versiones antiguas
    // @ts-expect-error-des
    const marker = new window.google.maps.Marker({
      position: myLatLng,
      map,
      title: 'Mi ubicación',
    });

    // Mostrar InfoWindow al hacer click
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  }
};

onMounted(() => {
  if (!document.getElementById('google-maps-script')) {
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = safeInitMap;
    document.body.appendChild(script);
  } else {
    safeInitMap();
  }
});
</script>

<style scoped>
.principal {
  display: grid;
  grid-template-rows: min-content min-content 1fr;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.463);
}
.contact {
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  height: 100%;
}
.talk {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}
.title {
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
}
.subtitle {
  color: rgb(215, 210, 210);
  font-weight: 500;
  padding: 0.3rem;
}

.info-item {
  display: grid;
  grid-template-rows: min-content 1fr;
  align-items: center;
  justify-items: center;
  gap: 0.4rem;
  line-height: 1.4;
}
.icon {
  color: #555;
  font-size: 30px;
  margin-top: 2px;
}
.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  justify-items: center;
  align-items: start;
  padding-top: 3rem;
  padding-bottom: 1rem;

  color: white;
}
.email-message {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.info-contact {
  display: flex;
  flex-direction: column;
}
.section-title {
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.title-info {
  color: white;
  font-size: bold;
  font-size: 3em;
  font-weight: bold;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-self: start;
}

.grid-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 2rem;
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.338);
}
.location {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.links-social {
  display: flex;
  width: 100%;
  align-self: end;
  place-content: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.338);
}
@media (min-width: 501px) and (max-width: 950px) {
  .grid-contact {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0rem;
    grid-template-rows: 1fr min-content 1fr;
    width: 100%;
  }
  .contact-info {
    display: grid;
    padding-top: 4rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    color: white;
  }
  .info-text {
    text-align: center;
  }
  .icon {
    align-self: center;
    justify-self: center;
  }
  .info-item {
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    background-color: rgba(0, 0, 0, 0.499);
    padding: 1rem;
    gap: 0.1rem;
    border-radius: 15px;
  }
}

@media (max-width: 500px) {
  .grid-contact {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content 1fr;
    padding: 0.3rem;
    width: 100%;
  }
  .info-item {
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    padding: 1rem;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.499);
  }
  .contact-info {
    display: grid;
    padding-top: 3rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    color: white;
  }
  .info-text {
    text-align: center;
  }
  .icon {
    align-self: center;
    justify-self: center;
  }
  .title {
    color: white;
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
</style>
