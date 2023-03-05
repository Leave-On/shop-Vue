import { ref } from 'vue';




export const useRegistration =  () => {
  const currentUser = ref({})

  const  register = async (userData) => {
      return new Promise((resolve, reject) => {
        const newUser = {
          id: Date.now(),
          username: userData.username,
          password: userData.password,
          role: userData.role
        };
        currentUser.value = {...newUser}
        resolve(true)
      })
    }
  return {
    register,
    currentUser
  }
}
