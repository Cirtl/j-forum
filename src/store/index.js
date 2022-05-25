import { createStore } from 'vuex'
import user from './modules/user'

const getters = {
    token: state => state.user.token
}

const store = createStore({
	modules: {
		user
	},
	getters
})

export default store;
