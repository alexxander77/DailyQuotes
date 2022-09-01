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

const quote_service = {
    create_quote,
    get_all_quotes
}

export default quote_service