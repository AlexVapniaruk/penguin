const state = {
    errors: [],
    question: {
        text: '',
        successMessage: '',
        callback: function(){

        }
    }
}

const getters = {
    getErrors(state) {
        return state.errors
    },
    getQuestion(state) {
        return state.question
    }
}

const actions = {
    removeErrors({commit}) {
        commit('removeErrors')
    },
    removeQuestion({commit}) {
        commit('removeQuestion')
    },
    addError({commit}, error) {
        let seconds = 5
        if(error.seconds){
            seconds = error.seconds
        }
        setTimeout(() => {
            commit('addError', error)
        }, 100)
        setTimeout(() => {
            commit('removeErrors')
        }, seconds*1000)
    },
    addQuestion({commit}, question) {
        commit('addQuestion', question)
    },
}

const mutations = {
    removeErrors(state) {
        if(state.errors.length !== 1) {
            state.errors.shift()
        } else {
            state.errors = []
        }
    },
    removeQuestion(state) {
        state.question = {}
    },
    addError(state, error) {
        state.errors.push(error)
    },
    addQuestion(state, question) {
        state.question = question
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
