import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '../components/WelcomePage'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/welcome',
            name: 'Welcome Page',
            component: WelcomePage
        },
        {
            path: '/login',
            name: 'Login Page',
            component: Login
        },
        {
            path: '/register',
            name: 'Register Page',
            component: Register
        }
    ],
    mode: 'history'
})
