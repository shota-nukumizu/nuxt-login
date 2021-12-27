export const state = () => ({
    authUser: null,
})

export const mutations = {
    SET_USER: function(state, data) {
        if (data) {
            state.authUser = data
        } else {
            state.authUser = null
        }
    }
}

export const actions = {
    async login({ commit }, { username, password }) {
        try {
            if (username != "demo" || password != "password0") {
                throw new Error("error!")
            }
            commit('SET_USER', username)
        } catch (error) {
            throw error
        }
    },
    async logout({ commit }) {
        try {
            commit('SET_USER', null)
        } catch (error) {
            throw error
        }
    }
}