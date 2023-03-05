<template>
 <v-container class="mt-14 px-11">

  <div v-if="userStore.userCart.length" class="d-flex justify-space-between">
    <div :style="{'width': '50%'}">
      <v-row
    v-for="item in userStore.userCart"
    :key="item.id"
    class="d-flex flex-column"
    >
      <v-col cols-4 class="d-flex  justify-space-around align-center">
        <img :src=item.img alt="here goes pic" width="70" height="70">
        <h2>{{ item.name }}</h2>
        <h3>{{ item.price }} ₽ </h3>
        <v-btn @click="userStore.removeFromUserCart(item)">Remove</v-btn>
      </v-col>
      <v-col cols-4 class="" align-self="center">

      </v-col>
    </v-row>
    </div>

    <div class="d-flex flex-column justify-space-around align-center"
      :style="{
        border: '5px solid grey',
        height: '20em',
        position: 'fixed',
        right: '10%',
        top: '80px',
        padding: '2em'
        }"
        >
        <h3>Subtotal ({{ userStore.userCart.length }}): {{ userStore.getTotalCartValue }} ₽ </h3>
        <v-btn >Proceed to checkout</v-btn>
    </div>
  </div>

  <div v-else class="d-flex flex-column">
    <h2 class="mb-4">Your cart is empty :(</h2>
    <v-btn to="/">Go shoping!</v-btn>
  </div>

  </v-container>
</template>

<script setup>
import { useUserStore } from '../../../app/stores/userStore';

const userStore = useUserStore()

</script>
