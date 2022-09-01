import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import quote_service from "./quote_service";


const initialState = {
    quotes: [],
    is_success: false,
    is_error: false,
    is_loading: false,
    message: ''
}

export const create_quote = createAsyncThunk('/quote/create', async(quote_data, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await quote_service.create_quote(quote_data, token)
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const get_all_quotes = createAsyncThunk('/quote/get_all_quotes', async(thunkAPI) => {
    try {

        return await quote_service.get_all_quotes()

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(create_quote.pending, (state) => {
                state.is_loading = true;
            })
            .addCase(create_quote.fulfilled, (state, action) => {
                state.is_loading = false;
                state.is_success = true;
                state.quotes.push(action.payload)
            })
            .addCase(create_quote.rejected, (state, action) => {
                state.is_loading = false;
                state.is_error = true;
                state.message = action.payload
            })
            .addCase(get_all_quotes.pending, (state) => {
                state.is_loading = true;
            })
            .addCase(get_all_quotes.fulfilled, (state, action) => {
                state.is_loading = false;
                state.is_success = true;
                state.quotes = action.payload
            })
            .addCase(get_all_quotes.rejected, (state, action) => {
                state.is_loading = false;
                state.is_error = true;
                state.message = action.payload
            })
    }
})

export const {reset} = quoteSlice.actions
export default quoteSlice.reducer