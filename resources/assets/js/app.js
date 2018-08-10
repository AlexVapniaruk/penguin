require('./bootstrap');
window.Vue = require('vue');
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import router from './router'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Vuex)

Vue.component('index', require('./components/Index.vue'));

const app = new Vue({
    el: '#app',
    router
});
