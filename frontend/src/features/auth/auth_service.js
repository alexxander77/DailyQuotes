import axios from 'axios'

const API_URL = '/api/users/'
const API_URL_LOGIN = '/api/users/login/'
const API_URL_LIKE = '/api/users/like'
const API_URL_DISLIKE = '/api/users/dislike'

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

const like = async (quote_id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const body = {
        quote_id: quote_id,
    }
    const response = await axios.post(API_URL_LIKE, body, config)

    return response.data

}

const dislike = async (quote_id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const body = {
        quote_id: quote_id,
    }
    const response = await axios.post(API_URL_DISLIKE, body, config)

    return response.data

}

const auth_service = {
    register,
    login,
    logout,
    like,
    dislike

}

export default auth_service;