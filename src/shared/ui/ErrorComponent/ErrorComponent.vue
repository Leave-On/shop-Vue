<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-alert
          color="error"
          icon="mdi-alert-circle-outline"
          :border="border"
          :outlined="outlined"
          outlined
        >
          {{ message }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
  </template>

  <script setup>

  const props = defineProps({
    message: {
        type: String,
        default: 'Page failed to load.',
      },
      border: {
        type: Boolean,
        default: false,
      },
      outlined: {
        type: Boolean,
        default: true,
      },
  })

  </script>
