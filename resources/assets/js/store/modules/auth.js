const state = {

}

const getters = {
}

const actions = {
    register({commit, dispatch}, user){
        axios.post('/api/register', user)
            .then(response => {
                var noty = {
                    text: 'Login success',
                    status: 'success'
                }
                console.log(response)
                dispatch('addError', noty).notifications
                const token = response.data.access_token
                localStorage.setItem('user-token', response.data.token_type + ' '+ token) // store the token in localstorage
                axios.defaults.headers.common['Authorization'] = response.data.token_type + ' '+ token
                // you have your token, now log in your user :)
                //dispatch(USER_REQUEST)
                resolve(response)

            })
            .catch(e => {
                console.log(e)
                console.log(e.response.data)
                if (e.response.data) {
                    var noty = {
                        text: e.response.data.message,
                        status: 'warning'
                    }
                    dispatch('addError', noty).notifications
                }
                localStorage.removeItem('user-token')
            })
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}
