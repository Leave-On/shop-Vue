import { defineStore } from "pinia";

export const useUserStore = defineStore('user',  {
  state: () => ({
    isAuth: false,
    user: {},
    userCart: [],
    isCartEmpty: true,
    isAdmin: false
  }),
  actions: {
    setIsAuth(bool) {
      this.isAuth = bool
    },
    setUser(user) {
      this.user = user
    },
    setIsAdmin(value) {
      this.isAdmin = value
    },
    setUserCart(data) {
      this.userCart = data
    },
    addToUserCart(device) {
      this.userCart.push(device)
      localStorage.setItem('userCart', JSON.stringify(this.userCart))
    },
    toggleIsCartEmpty() {
      this.isCartEmpty = !this.isCartEmpty
    },
    removeFromUserCart(i) {
      const removable = this.userCart.findIndex(item => item === i)
      this.userCart = this.userCart.slice(0, removable).concat(this.userCart.slice(removable + 1))
      localStorage.setItem('userCart', JSON.stringify(this.userCart))
    },
  },
  getters: {
    getTotalCartValue() {
      return this.userCart.reduce((acc, item) => acc + item.price, 0)
    }
  }
})
