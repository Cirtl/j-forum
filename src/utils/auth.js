import Cookies from 'js-cookie'

const id_key = 'id'
const username_key = 'username'

const setId = (id) => {
    Cookies.set(id_key, id)
}

const getId = () => {
    return Cookies.get(id_key)
}

const setUserName = (username) => {
    Cookies.set(username_key, username)
}

const getUserName = () => {
    return Cookies.get(username_key)
}

const isLogin = () => {
    return getId() !== null && getId() !== '' && getId() !== undefined
}

export {
    setId,
    getId,
    setUserName,
    getUserName,
    isLogin
}