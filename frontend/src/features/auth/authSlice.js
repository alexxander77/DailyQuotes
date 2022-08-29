import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import auth_service from "./auth_service";
const user = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user: user ? user : null,
    is_error: false,
    is_success: false,
    is_loading: false,
    message: ''
}

export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
        return await auth_service.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await auth_service.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', async() => {
    await auth_service.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.is_error = false
            state.is_success = false
            state.is_loading = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.is_loading = true;

            })
            .addCase(register.fulfilled, (state, action) => {
                state.is_loading = false;
                state.is_success = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.is_loading = false;
                state.is_error = true;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(login.pending, (state) => {
                state.is_loading = true;

            })
            .addCase(login.fulfilled, (state, action) => {
                state.is_loading = false;
                state.is_success = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.is_loading = false;
                state.is_error = true;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
            
    }

})

export const {reset} = authSlice.actions
export default authSlice.reducer