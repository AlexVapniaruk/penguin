require('./bootstrap');
require('./tokens');
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router'
import {store} from './store/index';
import App from './components/Index'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.component('index', require('./components/Index.vue'));
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Add the specific imported icons
library.add(faEnvelope)
library.add(faUser)
library.add(faFacebook)
library.add(faTwitter)
import iconsSolid from '@fortawesome/fontawesome-free-solid'
import iconsBrands from '@fortawesome/fontawesome-free-brands'
library.add(iconsSolid, iconsBrands)
// Enable the FontAwesomeIcon component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = new Vue({
    el: '#app',
    router,
    store: store,
    render: h => h(App),
});

