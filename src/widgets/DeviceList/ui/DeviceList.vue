<template>
  <v-row >
    <DeviceItem
    v-for="item in deviceStore.devices"
    :key="item.id"
    :device="item"
    />
  </v-row>
</template>

<script setup>
import { onMounted } from 'vue'
import { DeviceItem } from '../../DeviceItem';
import { useDeviceStore } from '../../../app/stores/deviceStore';
import db from '../../../../db/db.json'

const deviceStore = useDeviceStore()


</script>
