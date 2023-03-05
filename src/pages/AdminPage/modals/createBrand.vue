<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ props }">
      <v-btn
      class="mt-4"
      variant="outlined"
      v-bind="props"
      >
        Add brand
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar color="primary" title="Opening from the top"></v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
            label="Add device brand"
            v-model="deviceBrand"
            required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" color="error" @click="isActive.value = false">Close</v-btn>
          <v-btn variant="text" color="success" @click="addBrand">Add brand</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useDeviceStore } from '../../../app/stores/deviceStore';

const deviceBrand = ref('')
const deviceStore = useDeviceStore()

// const addBrand = () => {
//   createBrand({name: deviceBrand.value})
//   .then(() => deviceStore.brands.splice(deviceStore.brands.length + 1))
//   .then(() => deviceBrand.value = '')
// }

</script>
