<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ props }">
      <v-btn
      class="mt-4"
      variant="outlined"
      v-bind="props"
      >
        Add type
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar color="primary" title="Opening from the top"></v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
            label="Add device type"
            v-model="deviceType"
            required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" color="success" @click="addType(type)">Add type</v-btn>
          <v-btn variant="text" color="error" @click="isActive.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const deviceType = ref('')

const addType = () => {
  console.log(deviceType.value);
  // createType({name: deviceType.value}).then(() => deviceType.value = '')
}

</script>
