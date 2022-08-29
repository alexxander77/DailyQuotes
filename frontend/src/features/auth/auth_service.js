import axios from 'axios'

const API_URL = '/api/users/'
const API_URL_LOGIN = '/api/users/login/'

const register = async (user_data) => {
    const response = await axios.post(API_URL, user_data)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const login = async (user_data) => {
    const response = await axios.post(API_URL_LOGIN, user_data)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const auth_service = {
    register,
    login,
    logout,

}

export default auth_service;