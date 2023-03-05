<template>
  <div class="pagination-container">
    <ul class="pagination-list">
      <li
      v-for="page in pages"
      :key="page"
      :class="{ active: deviceStore.page === page }"
      >
        <a @click="setPage(page)">{{ page }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useDeviceStore } from '../../../app/stores/deviceStore';

const deviceStore = useDeviceStore()

const setPage  = (page) => {
  localStorage.setItem('lastVisitedPage', deviceStore.page)
  deviceStore.setPage(page)
}

const totalPages = computed(() => Math.ceil(deviceStore.totalCount / deviceStore.limit))

const pages = computed(() => {
  const pagesArray = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
});

</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
}

.pagination-list {
  display: flex;
  list-style: none;
  padding: 0;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
}

.pagination-list li {
  margin: 0;
}

.pagination-list li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.pagination-list li.active {
  background-color: #333;
}

.pagination-list li.active a {
  color: #fff;
}

.pagination-list li a:hover {
  background-color: #868686;
  cursor: pointer;
}
</style>