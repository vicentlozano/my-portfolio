<template>
  <section class="actions">
    <q-btn dense flat round icon="mdi-translate" :color="props.color" size="13px">
      <q-menu :style="`color:${props.textColor}`" auto-close>
        <q-list>
          <q-item v-for="lang in langs" :key="lang.code" clickable @click="setLang(lang.code)">
            <q-item-section avatar class="icon">
              <q-avatar rounded size="24px">
                <span :class="`fi fi-${lang.code.slice(-2).toLowerCase()}`"></span>
              </q-avatar>
            </q-item-section>
            <q-item-section>{{ $t(lang.labelKey) }}</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import 'flag-icons/css/flag-icons.min.css'

import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

// props&&emits
const props = defineProps({
  color: {
    type: String,
    default: 'black',
  },
  textColor: {
    type: String,
    default: 'black',
  },
})
// data
const langs = [
  { code: 'en-US', labelKey: 'english', flag: 'https://flagcdn.com/24x18/gb.png' },
  { code: 'es-ES', labelKey: 'spanish', flag: 'https://flagcdn.com/24x18/es.png' },
]

const lang = ref(locale.value)

//methods
const setLang = (l:string) => {
  lang.value = l
  locale.value = l
}
// computed&watchs
watch(lang, (val) => {
  locale.value = val
})
</script>

<style lang="scss" scoped>
.actions {
  justify-self: right;
}
.icon{
  padding-right: 3px;
    min-width: 0px;

}
</style>
