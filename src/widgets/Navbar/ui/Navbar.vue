<template>
  <v-app-bar flat :elevation="4" bg-grey density="comfortable">
    <v-container class="fill-height d-flex align-center justify-space-between">
      <div class="d-flex align-center justify-space-between">
        <v-btn to="/">MeShop</v-btn>
        <v-btn @click="$emit('themeToggled')">{{ theme }}</v-btn>
        <lang-switcher />
      </div>
      <div :class="{warning: userStore.userCart.length !== 0 }">
        <v-btn disabled>{{ $t('Cart') }}</v-btn>
        <v-btn variant="tonal" to="/cart">{{ userStore.userCart.length }}</v-btn>
      </div>
      <div v-if="userStore.isAuth" class="user_btns">
        <v-btn to="/admin" v-if="userStore.isAdmin">{{ $t('Admin dashboard') }}</v-btn>
        <v-btn to="/" @click="logOut">{{ $t('quit') }}</v-btn>
      </div>
      <div v-else justify-self-end>
        <v-btn to="/registration" >{{ $t('sign-in') }}</v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>


<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../../app/stores/userStore'
import LangSwitcher from '../../../shared/ui/LangSwitcher/LangSwitcher.vue';
import { useTranslation } from 'i18next-vue';
const isCart = ref(false)
const userStore = useUserStore()

const props = defineProps({
  theme: {
    type: String
  }
})
const { t } = useTranslation()
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

* {
  box-sizing: border-box;
}

.user_btns {
  width: 20em;
}
</style>