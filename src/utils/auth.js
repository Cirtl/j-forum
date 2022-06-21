import Cookies from 'js-cookie'

const id_key = 'id'
const username_key = 'username'
const email_key = 'email'
const avatar_key = 'avatar'

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

const setEmail = (email) => {
    Cookies.set(email_key, email)
}

const getEmail = () => {
    return Cookies.get(email_key)
}

const setAvatar = (avatar) => {
    Cookies.set(avatar_key, avatar)
}

const getAvatar = () => {
    return Cookies.get(avatar_key)
}

const isLogin = () => {
    return getId() !== null && getId() !== '' && getId() !== undefined
}

const logout = () => {
    Cookies.remove(id_key)
    Cookies.remove(username_key)
    Cookies.remove(email_key)
}

export {
    setId,
    getId,
    setUserName,
    getUserName,
    setEmail,
    getEmail,
    setAvatar,
    getAvatar,
    isLogin,
    logout
}