import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '../components/WelcomePage'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Profile from '../components/user/Profile'

import {store} from '../store/index'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.getAuthenticated) {
        next()
        return
    }
    next('/profile')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters.getAuthenticated) {
        next()
        return
    }
    next('/login')
}


export default new Router({
    routes: [
        {
            path: '/welcome',
            name: 'Welcome Page',
            component: WelcomePage,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/login',
            name: 'Login Page',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/register',
            name: 'Register Page',
            component: Register,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/profile',
            name: 'Profile Page',
            component: Profile,
            beforeEnter: ifAuthenticated,
        }
    ],
    mode: 'history'
})
