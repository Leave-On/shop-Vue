<template>
  <v-container class="mt-16 d-flex flex-column ">
    <CreateType />
    <CreateBrand />
    <CreateDevice />
  </v-container>

</template>

<script setup>
import CreateBrand from '../modals/createBrand.vue';
import CreateDevice from '../modals/createDevice.vue';
import CreateType from '../modals/createType.vue';

</script>
