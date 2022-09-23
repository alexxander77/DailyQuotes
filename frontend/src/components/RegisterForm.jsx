import { useState } from "react"
import { useEffect } from "react"

import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"

import {toast} from 'react-toastify'

import {register, reset} from '../features/auth/authSlice'

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

const RegisterForm = () => {

    const [name, set_name] = useState('')
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')
    const [password2, set_password2] = useState('')

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

    const on_change_name = (e) => {
        set_name(e.target.value)
    }

    const on_change_email = (e) => {
        set_email(e.target.value)
    }

    const on_change_password = (e) => {
        set_password(e.target.value)
    }

    const on_change_password2 = (e) => {
        set_password2(e.target.value)
    }

    const on_submit = (e) => {
        e.preventDefault()

        if(password != password2) {
            toast.error('Passwords are not matching')
        }
        else {
            const user_data = {
                name,
                email,
                password,
            }
            dispatch(register(user_data))
        }
    }

    if (is_loading) {
        return <p>Loading</p>
    }
    return (

        <form onSubmit={on_submit}>
        {/* Sign in */}
        <Grid item xl={12} height='50vh'>
            <Grid container spacing={0}>
                <Grid item xl={12} marginTop={5}>
                    <Typography variant='h4' align='center' gutterBottom fontFamily='Lancelot' >
                        Register
                    </Typography>
                </Grid>
                <Grid item xl={12} marginTop={1} marginLeft={30} marginRight={30}>
                    <CustomTextField size='small' fullWidth value={name} onChange={on_change_name} label="Name">

                    </CustomTextField>
                </Grid>
                <Grid item xl={12} marginTop={1} marginLeft={30} marginRight={30}>
                    <CustomTextField size='small' fullWidth value={email} onChange={on_change_email} label="Email">

                    </CustomTextField>
                </Grid>
                <Grid item xl={12} marginTop={1} marginLeft={30} marginRight={30}>
                    <CustomTextField size='small' fullWidth value={password} onChange={on_change_password} label="Password" type="password">

                    </CustomTextField>
                </Grid>
                <Grid item xl={12} marginTop={1} marginLeft={30} marginRight={30}>
                    <CustomTextField size='small' fullWidth value={password2} onChange={on_change_password2} label="Repeat Password" type="password">

                    </CustomTextField>
                </Grid>
                <Grid item xl={12} marginTop={1} marginLeft={30} marginRight={30}>
                    <CustomButton variant="outlined" fullWidth type="submit" >
                        Submit
                    </CustomButton>
                </Grid>
            </Grid>
            {/* </Box> */}
        </Grid>
        </form>
    )
}

export default RegisterForm;

