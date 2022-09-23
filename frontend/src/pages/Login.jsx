import { useState } from "react"
import { useEffect } from "react"


import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {login, reset} from "../features/auth/authSlice"


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField"

import Menu from "../components/Menu"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import Quote from "../components/Quote"
import { CssBaseline } from "@mui/material"



const Login = () => {
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')

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
            navigate('/user')
        }
        dispatch(reset())
    }, [user, is_error, is_success, message, navigate, dispatch])

    const on_change_email = (e) => {
        set_email(e.target.value)
    }

    const on_change_password = (e) => {
        set_password(e.target.value)
    }

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
    
    return(
        <div>
            <CssBaseline>
            <Grid container>
                <Menu/>
                <Grid item xl={11.5} >
                    <Grid container spacing={0}>
                        <Grid item xl={6}>
                            <Box height='100vh' sx={{bgcolor: '#B3E6EA', borderRight:'1px solid black'}}>
                                <Grid container columnSpacing={2}>
                                    <Grid item xl={6}>
                                        <Grid container>
                                            <Quote ml={2} text=" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
                                        letters, as opposed to using 'Content here, content here', making it look like readable English. 
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 
                                        'lorem ipsum' will uncover many web sites still in their infancy" author='Joe Moe'/>
                                        <Quote ml={2} text=" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
                                        letters, as opposed to using 'Content here, content here', making it look like readable English. 
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 
                                        'lorem ipsum' will uncover many web sites still in their infancy.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
                                        letters, as opposed to using 'Content here, content here'," author='Joe Moe'/>
                                        </Grid>
                                    </Grid>
                                    <Grid item xl={6}>
                                        <Grid container>
                                            <Quote mr={2} text=" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
                                            letters, as opposed to using 'Content here, content here', making it look like readable English. 
                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 
                                            'lorem ipsum' will uncover many web sites still in their infancy" author='Joe Moe'/>
                                        </Grid>
                                    </Grid>
                                    {/* <Quote text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                                    unknown printer took a galley of type and scrambled it to make a type specimen book." author='Joe Moe'/>
                                    <Quote text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" author='Woo Back'/>
                                    
                                    <Quote text=" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
                                    letters, as opposed to using 'Content here, content here', making it look like readable English. 
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 
                                    'lorem ipsum' will uncover many web sites still in their infancy" author='Joe Moe'/> */}
                                    

                                    
                                </Grid>
                            </Box>
                        </Grid>
                        
                        <Grid item xl={6}>
                            <Box height='100vh' sx={{bgcolor: '#B3E6EA'}}>
                                <Grid container>
                                    <LoginForm/>
                                    <RegisterForm/>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid> 
            </Grid>
            
            </CssBaseline>
        </div>
    )
}

export default Login