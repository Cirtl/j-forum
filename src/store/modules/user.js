import { service } from "@/utils/api"
import { 
    errorMessage, 
    successMessage 
} from "@/utils/message"
import { 
    setId,
    getId,
    setUserName,
    getUserName 
} from "@/utils/auth"

const getDefaultState = () => { 
    return {
        id: getId(),
        username: getUserName(),
        email: '',
        token: ''
    }
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: () => {
        Object.assign(state, getDefaultState())
    },
    SET_ID: (id) => {
        state.id = id
    },
    SET_USER: (username) => {
        state.username = username
    },
    SET_EMAIL: (email) => {
        state.email = email
    },
    SET_TOKEN: (token) => {
        state.token = token
    }
}

const actions = {
    login: ({ commit }, userForm) => {
        const {email, password} = userForm
        return new Promise((resolve, reject) => {
            service('/user/login', {
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
        console.log(userForm)
        const { email, username, password, password_ch } = userForm
        return new Promise((resolve, reject) => {
            service('/user/add', {
                email: email,
                password: password,
                username: username
            }, 'POST')
                .then(data => {
                    console.log(data)
                    if (data.code == 1) {
                        successMessage('注册成功')
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
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
