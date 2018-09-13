import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Notifications from './modules/notifications'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        notifications: Notifications,
        auth: Auth
    }
})