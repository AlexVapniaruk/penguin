import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '../components/WelcomePage'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/welcome',
            name: 'Welcome Page',
            component: WelcomePage
        }
    ],
    mode: 'history'
})