<template>
  <v-dialog transition="dialog-top-transition" max-width="600" >
    <template v-slot:activator="{ props }">
      <v-btn
      class="mt-4"
      variant="outlined"
      v-bind="props"
      @click="refreshData"
      >
      Add device
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar color="default" title="Adding new device"></v-toolbar>
        <v-card-text>
          <v-form lazy-validation>
            <v-select
            label="Choose type"
            :items="deviceStore.types.map(type => type.name)"
            variant="solo"
            required
            v-model="deviceType"
          ></v-select>
          <v-select
            label="Choose brand"
            :items="deviceStore.brands.map(brand => brand.name)"
            variant="solo"
            required
            v-model="deviceBrand"
          ></v-select>
          <v-text-field
          label="Add device name"
          v-model="deviceName"
          required
          ></v-text-field>
          <v-text-field
          label="Add device price"
          v-model="devicePrice"
          required
          ></v-text-field>
          <v-file-input
          label="Upload device image"
          accept="image/*"
          v-model="deviceImage"
          required
          ></v-file-input>
          <hr/>
          <v-row
            v-for="(info, i) in infos"
            :key="info.id"
            class="mt-4"
            >
              <v-text-field
              label="Info title"
              v-model="info.title"

              ></v-text-field>
              <v-text-field
              label="Info description"
              v-model="info.description"
              class="mx-1"
              ></v-text-field>
              <v-btn
              @click="deleteInfoField(info.id, i)"
              class="mt-3"
              color="warning"
              variant="outlined"
              >
              Delete</v-btn>
            </v-row>
          <v-btn
          variant="outlined"
          @click="addInfoField"
          class="mt-4"
          >
          Add new field</v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="outlined" color="error" @click="isActive.value = false">Close</v-btn>
          <v-btn variant="outlined" color="green" @click="addDevice">Add device</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useDeviceStore } from '../../../app/stores/deviceStore'
import { fetchTypes, fetchBrands, createDevice } from '../../../../http/deviceApi';

const deviceStore = useDeviceStore()
const deviceType = ref('')
const deviceBrand = ref('')
const deviceName = ref('')
const devicePrice = ref('')
const deviceImage = ref([])
const infos = ref([])

const refreshData = () => {
  fetchTypes().then(data => deviceStore.setTypes(data))
  fetchBrands().then(data => deviceStore.setBrands(data))
}

const addInfoField = () => {
  if (infos.value.length < 5) {
    const info = {title: '', description: '', id: Date.now()}
    infos.value.push(info)
}
}
const deleteInfoField = (id, i) => {
  infos.value = infos.value.filter(i => i.id !== id)
}

const addDevice = () => {
  const typeId = deviceStore.types.find(type => type.name === deviceType.value).id
  const brandId = deviceStore.brands.find(brand => brand.name === deviceBrand.value).id

  const newDevice = new FormData
  newDevice.append('name', deviceName.value)
  newDevice.append('price', devicePrice.value)
  newDevice.append('img', deviceImage.value[0])
  newDevice.append('typeId', typeId)
  newDevice.append('brandId', brandId)
  newDevice.append('info', JSON.stringify(infos.value))


  createDevice(newDevice).then(() => {
    deviceName.value = ''
    devicePrice.value = ''
    deviceImage.value = []
    deviceType.value = ''
    deviceBrand.value = ''
    infos.value = []
    console.log('gotcha')
  })
}

</script>