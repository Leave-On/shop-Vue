<template>
  <v-app-bar flat :elevation="4" bg-grey density="comfortable">
    <v-container class="fill-height d-flex align-center justify-space-between">
      <div>
        <v-btn to="/">MeShop</v-btn>
        <v-btn
          @click="$emit('themeToggled')">{{ theme }}</v-btn>
      </div>
      <div :class="{warning: userStore.userCart.length !== 0 }">
        <v-btn disabled>Cart</v-btn>
        <v-btn variant="tonal" to="/cart">{{ userStore.userCart.length }}</v-btn>
      </div>
      <div v-if="userStore.isAuth">
        <v-btn to="/admin" v-if="userStore.isAdmin">Admin dashboard</v-btn>
        <v-btn to="/" @click="logOut">Quit</v-btn>
      </div>
      <div v-else justify-self-end>
        <v-btn to="/registration" >Sign in</v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>


<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../../app/stores/userStore'

const isCart = ref(false)
const userStore = useUserStore()

const props = defineProps({
  theme: {
    type: String
  }
})

const emit = defineEmits({
  themeToggled: {
    type: String
  }
})

const logOut = () => {
  userStore.setUser({})
  userStore.setIsAuth(false)
  localStorage.removeItem('currentUser')
}


</script>

<style>
.warning {
  color: red !important;
}
</style>