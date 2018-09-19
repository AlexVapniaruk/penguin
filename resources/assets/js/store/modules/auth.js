import router from '../../router'

const state = {
    authenticated: false
}

const getters = {
    getAuthenticated(state){
        if(localStorage.getItem('user-token')){
            return true
        }
        return state.authenticated
    }
}

const actions = {
    login({commit, dispatch}, user){
        axios.post('/api/login', user)
            .then(response => {
                var noty = {
                    text: 'Login successful',
                    status: 'success'
                }
                dispatch('addError', noty).notifications
                const token = response.data.access_token
                localStorage.setItem('user-token', response.data.token_type + ' '+ token) // store the token in localstorage
                axios.defaults.headers.common['Authorization'] = response.data.token_type + ' '+ token
                // you have your token, now log in your user :)
                //dispatch(USER_REQUEST)
                //resolve(response)
                commit('setAuthenticated', true)
                router.push('/profile')
            })
            .catch(e => {
                console.log(e)
                if (e.response.data) {
                    var noty = {
                        text: e.response.data.message,
                        status: 'warning'
                    }
                    dispatch('addError', noty).notifications

                    if(e.response.data.errors) {
                        for (var key in e.response.data.errors) {
                            var noty = {
                                text: e.response.data.errors[key][0],
                                status: 'warning'
                            }
                            dispatch('addError', noty).notifications
                        }
                    }

                }
                localStorage.removeItem('user-token')
            })
    },
    register({commit, dispatch}, user){
        axios.post('/api/register', user)
            .then(response => {
                var noty = {
                    text: 'Register successful',
                    status: 'success'
                }
                dispatch('addError', noty).notifications
                const token = response.data.access_token
                localStorage.setItem('user-token', response.data.token_type + ' '+ token) // store the token in localstorage
                axios.defaults.headers.common['Authorization'] = response.data.token_type + ' '+ token
                // you have your token, now log in your user :)
                //dispatch(USER_REQUEST)
                resolve(response)
                router.push('/login')

            })
            .catch(e => {
                if (e.response.data) {
                    var noty = {
                        text: e.response.data.message,
                        status: 'warning'
                    }
                    dispatch('addError', noty).notifications

                    if(e.response.data.errors) {
                        for (var key in e.response.data.errors) {
                            var noty = {
                                text: e.response.data.errors[key][0],
                                status: 'warning'
                            }
                            dispatch('addError', noty).notifications
                        }
                    }

                }
                localStorage.removeItem('user-token')
            })
    }
}

const mutations = {
    setAuthenticated(state, value){
        state.authenticated = value
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
