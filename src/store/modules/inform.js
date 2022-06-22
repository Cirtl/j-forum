const state = {
    changedCategory: ''
}

const mutations = {
    CATEGORY_UPDATE: (state, newCategory) => {
        state.changedCategory = newCategory
    }
}

const actions = {
    addedCategory: ({ commit }, category) => {
        commit('CATEGORY_UPDATE', category)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}