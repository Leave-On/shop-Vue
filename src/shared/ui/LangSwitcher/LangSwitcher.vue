<template>
<div>
      <div v-if="languages">
        <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
          <a v-if="$i18next.resolvedLanguage !== lng" v-on:click="$i18next.changeLanguage(lng)">
            {{ languages[lng].nativeName }}
          </a>
          <strong v-if="$i18next.resolvedLanguage === lng">
            {{ languages[lng].nativeName }}
          </strong>
          <span v-if="index < (Object.keys(languages).length - 1)">&nbsp;|&nbsp;</span>
        </span>
      </div>
    </div>
</template>

<script setup>
import { useTranslation } from 'i18next-vue';
import i18next from 'i18next';

const languages = {
        en: { nativeName: 'EN' },
        ru: { nativeName: 'РУ' }
      }

</script>

<style scoped>
* {
    width: 4em;
    cursor: pointer;
}
</style>