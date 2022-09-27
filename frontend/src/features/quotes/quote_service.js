import axios from "axios";

const API_URL = '/api/quotes/'


const create_quote = async (quote_data, token) => {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, quote_data, config)

    return response.data
}

const get_all_quotes = async () => {

    const response = await axios.get(API_URL)
    return response.data
}

const delete_quote = async (quote_id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const route = API_URL + quote_id

    const response = await axios.delete(route, config)

    return response.data
}

const update_quote = async (quote_data, token) => {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const route = API_URL + quote_data._id

    const update_data = {
        text: quote_data.text,
        author: quote_data.author
    }
    const response = await axios.put(route, update_data, config)

    return response.data
}

const quote_service = {
    create_quote,
    get_all_quotes,
    delete_quote,
    update_quote
}

export default quote_service