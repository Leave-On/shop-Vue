import { useUserStore } from '../stores/userStore'
import { createRouter, createWebHistory } from 'vue-router'
import {AdminPage} from '../../pages/AdminPage'
import AuthPage from '../../features/AuthByUsername/ui/AuthPage.vue'
import {ShopPage} from '../../pages/ShopPage'
import {CartPage} from '../../pages/CartPage'
import {DevicePage} from '../../pages/DevicePage'

const requireAuth = (to, from, next) => {
    const userStore = useUserStore()
    if (userStore.isAuth && userStore.isAdmin) {
        next()
    }
    else {
        next({ name: 'shop' })
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'admin',
            path: '/admin',
            component: AdminPage,
            beforeEnter: requireAuth
        },
        {
            name: 'shop',
            path: '/',
            component: ShopPage
        },
        {
            name: 'devicePage',
            path: '/devicePage' + '/:id',
            component: DevicePage,
            props: true
        },
        {
            name: 'login',
            path: '/login',
            component: AuthPage
        },
        {
            name: 'registration',
            path: '/registration',
            component: AuthPage
        },
        {
            name: 'cart',
            path: '/cart',
            component: CartPage
        }
    ]
})


router.beforeEach((to, from, next) => {     // experimental
    const userStore = useUserStore()
    if (userStore) {
        if (!to.matched.length) next({ name: 'shop' })
        else next()
    }
})

export default router