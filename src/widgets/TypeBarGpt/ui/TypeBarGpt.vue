<template>
  <div>
    <select v-model="selectedTypeId">
      <option :value="null">All Types</option>
      <option v-for="type in types" :value="type.id">{{ type.name }}</option>
    </select>

    <select v-model="selectedBrandId">
      <option :value="null">All Brands</option>
      <option v-for="brand in brands" :value="brand.id">{{ brand.name }}</option>
    </select>

    <ul>
      <li v-for="device in filteredDevices" :key="device.id">{{ device.name }}</li>
    </ul>

    <div>
      <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <button @click="nextPage" :disabled="currentPage === lastPage">Next</button>
      <span>Page {{ currentPage }} of {{ lastPage }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDeviceFilter } from './useDeviceFilter';

const devices = ref([
      { id: 1, name: 'Device 1', typeId: 1, brandId: 1 },
      { id: 2, name: 'Device 2', typeId: 1, brandId: 2 },
      { id: 3, name: 'Device 3', typeId: 2, brandId: 1 },
      { id: 4, name: 'Device 4', typeId: 2, brandId: 2 },
    ]);

    const types = ref([
      { id: 1, name: 'Type 1' },
      { id: 2, name: 'Type 2' },
    ]);

    const brands = ref([
      { id: 1, name: 'Brand 1' },
      { id: 2, name: 'Brand 2' },
    ]);

    const selectedTypeId = ref(null);
    const selectedBrandId = ref(null);
    const currentPage = ref(1);
    const itemsPerPage = ref(2);

    const { filteredDevices, updateSelectedIds, updatePagination } = useDeviceFilter(
      selectedTypeId,
      selectedBrandId,
      devices,
      currentPage,
      itemsPerPage
    );

    const lastPage = Math.ceil(filteredDevices.value.length / itemsPerPage.value);

    function prevPage() {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    }

    function nextPage() {
      if (currentPage.value < lastPage) {
        currentPage.value++;
      }
    }
</script>
