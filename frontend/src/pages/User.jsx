import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { get_all_quotes, reset } from "../features/quotes/quoteSlice"


import QuoteForm from "../components/QuoteForm"
import Menu from "../components/Menu"
import Quote from "../components/Quote"

import { CssBaseline } from "@mui/material"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const User = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const {quotes, is_loading, is_error, message} = useSelector((state) => state.quote)

    useEffect( () => {
        if(!user) {
            navigate('/login')
        }
        if(is_error) {
            console.log(message)
        }

        dispatch(get_all_quotes())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, is_error, message, dispatch])

    return(
        <div>
            <CssBaseline>
                <Grid container>
                    <Menu/>
                    <Grid item xl={11.5}>
                        <Grid container spacing={0}>
                            <Grid item xl={4}>
                                <Box height='100%' minHeight='100vh' sx={{bgcolor: '#B3E6EA', borderRight:'1px solid black'}}>
                                    <Grid container>
                                        <QuoteForm/>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xl={8}>
                                <Box height='100%' minHeight='100vh' sx={{bgcolor: '#B3E6EA'}}>
                                    <Grid container columnSpacing={2}>
                                        <Grid item xl={12} height='10vh'>
                                            <Typography marginTop={5} variant='h4' align='center' fontFamily='Lancelot'>
                                                Quotes by User
                                            </Typography>
                                        </Grid>
                                        <Grid item xl={12}>
                                            <Grid container>
                                                { 
                                                    quotes.map((quote, index) => {
                                                        if(quote.created_by_user == user._id) {
                                                            return <Quote flag={true} ml={30} mr={30} id={quote._id} text={quote.text} author={quote.author}></Quote> 
                                                        }
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
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

export default User