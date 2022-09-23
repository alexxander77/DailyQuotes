import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {login, reset} from "../features/auth/authSlice"


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';

import '@fontsource/lancelot'
const CustomButton = styled(Button)({
    borderColor: 'green',
    color: 'black',
    '&: hover': {
        backgroundColor: 'green',
        borderColor: 'black',
        color: 'black'
    }
})
const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'green',
        },
        '&:hover fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

const LoginForm = () => {

    const [email, set_email] = useState('')
    const [password, set_password] = useState('')

    const on_change_email = (e) => {
        set_email(e.target.value)
    }

    const on_change_password = (e) => {
        set_password(e.target.value)
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, is_loading, is_error, is_success, message} = useSelector(
        (state) => state.auth
    )

    useEffect( () => {
        if(is_error) {
            toast.error(message)
        }
        if(is_success || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, is_error, is_success, message, navigate, dispatch])


    const on_submit = (e) => {
        e.preventDefault()
        const user_data = {
            email,
            password
        }
        dispatch(login(user_data))
    }

    if (is_loading) {
        return <p>Loading</p>
    }

    return (
        <>
            {/* Sign in */}
            <form onSubmit={on_submit}>
            <Grid item xl={12} height='50vh'>
                {/* <Box  component='form' height='50vh' sx={{bgcolor: 'red'}}> */}
                <Grid container spacing={0}>
                    <Grid item xl={12} marginTop={5}>
                        <Typography variant='h4' align='center' gutterBottom fontFamily='Lancelot' >
                            Sign In
                        </Typography>
                    </Grid>
                    <Grid item xl={12} marginTop={1} marginLeft={30} marginRight={30}>
                        <CustomTextField size='small' fullWidth value={email} onChange={on_change_email} label='Email' >

                        </CustomTextField>
                    </Grid>
                    <Grid item xl={12} marginTop={1} marginLeft={30} marginRight={30}>
                        <CustomTextField size='small' fullWidth value={password} onChange={on_change_password} type='password' label='Password'>

                        </CustomTextField>
                    </Grid>
                    <Grid item xl={12} marginTop={1} marginLeft={30} marginRight={30}>
                        <CustomButton variant="outlined" fullWidth type='submit'>
                            Submit
                        </CustomButton>
                    </Grid>
                </Grid>
                {/* </Box> */}
            </Grid>
            </form>
            
        </>
    )
}

export default LoginForm;