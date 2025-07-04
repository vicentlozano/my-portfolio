<template>
  <q-form ref="formRef" @submit.prevent="submitForm" class="q-gutter-md q-pa-md form">
    <q-input
      filled
      bg-color="blue-1"
      v-model="form.name"
      label-color="black"
      label="Name"
      dense
      :rules="[requiredRule]"
    >
      <template v-slot:append>
        <q-icon name="person" />
      </template>
    </q-input>

    <q-input
      filled
      bg-color="blue-1"
      v-model="form.email"
      label-color="black"
      label="Email"
      type="email"
      dense
      :rules="[requiredRule, emailRule]"
    >
      <template v-slot:append>
        <q-icon name="email" />
      </template>
    </q-input>

    <q-input
      filled
      bg-color="blue-1"
      v-model="form.subject"
      label-color="black"
      label="Subject"
      dense
      :rules="[requiredRule]"
    >
      <template v-slot:append>
        <q-icon name="subject" />
      </template>
    </q-input>

    <q-input
      filled
      bg-color="blue-1"
      v-model="form.message"
      label-color="black"
      label="Message"
      type="textarea"
      :rows="5"
      :rules="[requiredRule]"
    >
      <template v-slot:append>
        <q-icon name="message" />
      </template>
    </q-input>

    <q-btn label="Enviar" color="primary" type="submit" class="btn-form" />
  </q-form>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { useQuasar } from 'quasar';
import type { QForm } from 'quasar';

import emailjs from 'emailjs-com';

const $q = useQuasar();
const formRef = ref<QForm | null>(null);

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

// Regles de validació
const requiredRule = (val: string) => !!val || 'Aquest camp és obligatori';
const emailRule = (val: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Correu electrònic no vàlid';

const submitForm = async () => {
  // Validem el formulari
  const valid = await formRef.value?.validate();
  if (!valid) {
    $q.notify({
      color: 'negative',
      message: 'Revisa els camps obligatoris.',
      icon: 'error',
    });
    return;
  }

  // Si tot ok, enviem
  const serviceID = 'service_fr2l178';
  const templateID = 'template_6xde27i';
  const userID = 'KjNQqVVaqaMFmPSVq';
  try {
    await emailjs.send(
      serviceID,
      templateID,
      {
        name: form.value.name,
        email: form.value.email,
        title: form.value.subject,
        message: form.value.message,
      },
      userID,
    );
    $q.notify({
      color: 'positive',
      message: 'Missatge enviat!',
      icon: 'send',
    });
    form.value = { name: '', email: '', subject: '', message: '' };
    await nextTick();
    formRef.value?.resetValidation();
  } catch (err: unknown) {
    $q.notify({
      color: 'negative',
      message: `Error`,
      icon: 'error',
    });
    console.log(err);
  }
};
</script>
