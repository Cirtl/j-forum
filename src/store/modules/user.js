import { service } from "@/utils/api"
import { 
    errorMessage, 
    successMessage 
} from "@/utils/message"
import { 
    setId,
    getId,
    setUserName,
    getUserName,
    setEmail,
    getEmail,
    setAvatar,
    getAvatar,
    logout
} from "@/utils/auth"

const getDefaultState = () => { 
    return {
        id: getId(),
        username: getUserName(),
        email: getEmail(),
        avatar: getAvatar(),
        token: ''
    }
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_ID: (state, id) => {
        state.id = id
    },
    SET_USER: (state, username) => {
        state.username = username
    },
    SET_EMAIL: (state, email) => {
        state.email = email
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}

const actions = {
    login: ({ commit }, userForm) => {
        const {email, password} = userForm
        return new Promise((resolve, reject) => {
            service('/api/user/login', {
                email: email,
                password: password
            }, 'POST')
                .then(data => {
                    if (data.code == 1) {
                        commit('SET_ID', data.data.id)
                        setId(data.data.id)
                        commit('SET_USER', data.data.username)
                        setUserName(data.data.username)
                        commit('SET_EMAIL', data.data.email)
                        setEmail(data.data.email)
                        commit('SET_AVATAR', data.data.avatar)
                        setAvatar(data.data.avatar)
                        successMessage(data.message)
                        resolve()
                    } else {
                        errorMessage(data.message)
                        reject()
                    }
                })
                .catch(err => {
                    errorMessage(err.message)
                    reject()
                })
        })
    },
    register: ({ commit }, userForm) => {
        const { email, username, password, password_ch } = userForm
        return new Promise((resolve, reject) => {
            service('/api/user/add', {
                email: email,
                password: password,
                username: username
            }, 'POST')
                .then(data => {
                    console.log(data)
                    if (data.code == 1) {
                        successMessage('????????????')
                        resolve()
                    } else {
                        errorMessage(data.message)
                        reject()
                    }
                })
                .catch(err => {
                    errorMessage(err.message)
                    reject()
                })
        })
    },
    logout : ({ commit }) => {
        commit('RESET_STATE')
        logout()
    },
    changeAvatar: ({ commit }, avatar) => {
        commit('SET_AVATAR', avatar)
        setAvatar(avatar)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
