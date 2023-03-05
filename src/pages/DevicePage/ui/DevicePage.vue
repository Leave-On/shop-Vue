<template>
  <v-container class="mt-14 px-11">
    <v-row >
      <v-col cols-4>
        <img :src="deviceStore.selectedDevice.img" alt="here goes pic" width="300" height="300">
        <div class="text-center">
        <v-rating
          v-model="rating"
          hover
          half-increments
          @click="deviceStore.setD"
        ></v-rating>
        <pre>{{ rating }}</pre>
        </div>
      </v-col>
      <v-col cols-4 class="" align-self="center">
        <h2>{{ brand }}</h2>
        <h2>{{ deviceStore.selectedDevice.name }}</h2>
        <div class="d-flex justify-space-around">
          <div class="rating d-flex align-center justify-center" >
          {{ deviceStore.selectedDevice.rating }}
        </div>
        </div>
      </v-col>
      <v-col cols-4 class="d-flex flex-column justify-space-around align-center" width="300" height="300"
      :style="{border: '5px solid grey'}"
      >
        <h3>{{ deviceStore.selectedDevice.price }} ₽ </h3>
        <v-btn @click="userStore.addToUserCart(deviceStore.selectedDevice)">Add to cart</v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-col cols-12 >
        <h1>Specification</h1>
      <div class="mb-2 pa-2"
      v-for="(info, index) in deviceInfo"
      :key="info.id"
      :class="{'bg-grey': index % 2 }"
      >
        {{ info.title }} - {{ info.description }}
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { useDeviceStore } from '../../../app/stores/deviceStore';
import { useUserStore } from '../../../app/stores/userStore';
import db from '../../../../db/db.json'

const deviceStore = useDeviceStore()
const userStore = useUserStore()
const brand = ref('')
const rating = ref(3)

const props = defineProps({
  id: {
    required: true
  }
})

const deviceInfo = db.description.filter(d => d.deviceId == props.id)

onMounted(() => {
  deviceStore.setSelectedDevice(JSON.parse(localStorage.getItem('currentDevice')))
})

</script>

<style>
.rating {
  background-image: url('/star.png');
  background-size: cover;
  background-position: center;
  min-width: 240px;
  min-height: 240px;
  font-size: 64px;
}

h2 {
  text-align: center;
}

</style>
