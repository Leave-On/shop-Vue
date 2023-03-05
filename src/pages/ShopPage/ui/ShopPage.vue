<template>
  <v-container class="mt-10 pt-0">
    <v-row>
      <v-col cols="3">
      <TypeBar />
      </v-col>
      <v-col cols="9" mt="5">
        <BrandBar/>
        <DeviceList/>
        <Pagination />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import {TypeBar} from '../../../widgets/TypeBar'
import {BrandBar} from '../../../widgets/BrandBar'
import {DeviceList} from '../../../widgets/DeviceList'
import { useDeviceStore } from '../../../app/stores/deviceStore';
import { onMounted, watch } from 'vue';
import { useDeviceFilter } from '../comosables/useDeviceFilter'
import db from '../../../../db/db.json'
import { Pagination } from '../../../widgets/Pagination'

const route = useRoute()
const deviceStore = useDeviceStore()
if (localStorage.getItem('lastVisitedPage')) {
    deviceStore.setPage(localStorage.getItem('lastVisitedPage'))
    console.log(deviceStore.page);
  }

onMounted(() => {
  deviceStore.setTypes(db.types)
  deviceStore.setBrands(db.brands)
  localStorage.setItem('lastVisitedPage', deviceStore.page)
  const {getDevices} = useDeviceFilter(null, null, 1, 3)

  deviceStore.setLimit(3)
  deviceStore.setTotalCount(getDevices.value.devices.length)
  deviceStore.setDevices(getDevices.value.devicesPerPage)
})

watch([() => deviceStore.page,  () => deviceStore.selectedBrand, () => deviceStore.selectedType], () => {
const {getDevices} = useDeviceFilter(
  deviceStore.selectedType.id,
  deviceStore.selectedBrand.id,
  deviceStore.page,
  3
  )
  localStorage.setItem('lastVisitedPage', deviceStore.page)
  deviceStore.setTotalCount(getDevices.value.devices.length)
  deviceStore.setDevices(getDevices.value.devicesPerPage)
})

</script>

<style >

</style>