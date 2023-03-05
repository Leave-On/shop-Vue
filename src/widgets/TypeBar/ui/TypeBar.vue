<template>
  <v-container class="mt-4">
    <v-list>
      <v-list-subheader>Product type</v-list-subheader>
      <v-list-item
      class="mb-1"
        v-for="(type) in deviceStore.types"
        :key="type.id"
        :value="type.name"
        active-color="primary"
        variant="tonal"
        @click="setType(type)"
      >
        {{type.name}}
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { useDeviceStore } from '../../../app/stores/deviceStore'

const deviceStore = useDeviceStore()

const setType = type => {
  if (deviceStore.selectedType === type) {
    deviceStore.setSelectedType({})
  } else {
    deviceStore.setSelectedType(type)
  }
}


</script>
