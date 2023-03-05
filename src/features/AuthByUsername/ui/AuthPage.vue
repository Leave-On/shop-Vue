<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card text="" variant="tonal" class="text-center h-40 w-50 pa-5">
      <v-card-title v-if="route.name === 'login'">Autorization</v-card-title>
      <v-card-title v-else>Registration</v-card-title>
      <v-form>
        <v-container class="d-flex flex-column" fluid>
          <v-text-field autofocus v-model="username" label="Username"
            required></v-text-field>
          <v-text-field v-model="password" :counter="4" label="Password" required
            type="password" @keyup.enter="onSubmit"></v-text-field>
          <div v-if="route.name === 'registration'" class="d-flex">
            <input type="checkbox" name="Admin checkbox" id="isAdmin" class="mr-4" v-model="isAdmin" @click="confirmAdmin">
            <label for="isAdmin">Me admin</label>
          </div>
          <div class="d-flex justify-space-between">
            <div v-if="route.name === 'login'" class="align-self-center">
              No account?
              <router-link to="registration">Sign up</router-link>
            </div>
            <div v-if="route.name === 'registration'" class="align-self-center">
              Already have account?
              <router-link to="login">Sign in</router-link>
            </div>
            <v-btn v-if="route.name === 'registration'"
              @click="onSubmit">Register</v-btn>
            <v-btn v-if="route.name === 'login'" @click="onSubmit">Enter</v-btn>
          </div>
        </v-container>
      </v-form>
      <Modal
      :title="'You sure you\'re admin?'"
      :showModal="showModal"
      :closeBtnText="'No, sorry'"
      :confirmBtnText="'Absolutely'"
      @hideModal="onHideModal"
      @confirm="confirmModal"
      />
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../../../app/stores/userStore'
import { Modal } from '../../../shared/ui/Modal'
import { useAuth } from '../composables/useAuth'
import { useRegistration } from '../composables/useRegistration'

const username = ref('')
const password = ref('')
const isAdmin = ref(false)
const showModal = ref(false)

console.log(isAdmin.value);
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const onHideModal = () => {
  showModal.value = false
  isAdmin.value = false
}
const confirmModal = () => {
  isAdmin.value = true
  showModal.value = false
}
const confirmAdmin = () => {
  if (!isAdmin.value) {
  showModal.value = true
}
}


const onSubmit = async () => {
  let user;
  try {
    if (route.name === 'registration') {
      const { register, currentUser } = useRegistration()

      const userData = {
        username: username.value,
        password: password.value,
        role: isAdmin.value ? 'admin' : 'user'
      }

      await register(userData)
        .then(result => {
          if (result) {
            userStore.setUser(currentUser.value)
            localStorage.setItem('currentUser', JSON.stringify({username: currentUser.value.username, role: currentUser.value.role}))
            if (currentUser.value.role === 'admin') {
              userStore.setIsAdmin(true)
            }
            router.push('/')
            userStore.setIsAuth(true)
          } else {
            alert('Something broke')
          }
        })
        .catch(error => {
          console.log(error)
        });
    } else {
      const { authenticate, currentUser } = useAuth()

      await authenticate(username.value, password.value)
        .then(result => {
          if (result) {
            userStore.setUser(currentUser.value)
            if (currentUser.value.role === 'admin') {
              userStore.setIsAdmin(true)
            }
            userStore.setIsAuth(true)
            router.push('/')
          } else {
            alert('wrong credentials')
          }
        })
    }
  }
  catch (e) {
    console.log(e.message)
  }
}

</script>

<style scoped>
#isAdmin {
  width: 2em;
}
</style>