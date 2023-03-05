<template>
  <v-app id="inspire" :theme="theme" >
    <Navbar @themeToggled="toggleTheme" :theme="theme"/>
    <RouterView  />
    <div v-if="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Navbar } from '../widgets/Navbar';
import { useUserStore } from './stores/userStore'

const theme = ref('light')
const userStore = useUserStore()
const loading = ref(false)

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  if (localStorage.getItem('currentUser')) {
    userStore.setUser(JSON.parse(localStorage.getItem('currentUser')))
    userStore.setIsAuth(true)
    if (userStore.user.role === 'admin') {
      userStore.setIsAdmin(true)
    }
  }
})

</script>


<style >
a {
  text-decoration: none;
}


</style>
