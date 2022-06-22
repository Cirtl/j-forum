import { createStore } from 'vuex'
import user from './modules/user'
import inform from './modules/inform'

const getters = {
    token: state => state.user.token
}

const store = createStore({
	modules: {
		user,
		inform
	},
	getters
})

export default store;
