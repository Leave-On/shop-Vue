// not used

<template>
  <div class="outer__star">
    <div class="inner__star" :style="{height: calcStar +'%'}"></div>
  </div>
</template>

<script setup>
import { useDeviceStore } from '../stores/deviceStore';
import { computed } from 'vue';

const deviceStore = useDeviceStore()

const props = defineProps({
  rating: {
    type: Number,
    required: true
  }
})

const calcStar = computed(() => {
  return 100 - (props.rating / 5) * 100
})

console.log(calcStar.value);

</script>




<style  scoped>
.outer__star {
  position: relative;
  display: block;
}

.outer__star::before {
  content: '';
  display: block;
  background-image: url('/golden-star.png');
  background-size: cover;
  height: 20px;
  width: 20px;
  background-position: center;
  z-index: 3;
}

.outer__star::after {
  content: '';
  height: 20px;
  width: 20px;
  background-image: url('/transparet.png');
  background-position: center;
  background-size: cover;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
}

.inner__star {
  position: absolute;
  right: 0px;
  top: 0px;
  white-space: nowrap;
  height: 20px;
}

.inner__star::before {
  content: "";
  display: block;
  background: white;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 20px;
  z-index: 4;
}

</style>