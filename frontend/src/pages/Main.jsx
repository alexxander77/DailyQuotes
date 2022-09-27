import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { get_all_quotes, reset } from "../features/quotes/quoteSlice"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import Quote from "../components/Quote"
import Menu from "../components/Menu"

import { CssBaseline } from "@mui/material";


const Main = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {quotes, is_loading, is_error, message} = useSelector((state) => state.quote)

    useEffect( () => {
        if(is_error) {
            console.log(message)
        }

        dispatch(get_all_quotes())

        return () => {
            dispatch(reset())
        }
    }, [navigate, is_error, message, dispatch])

    if(is_loading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div>
            <CssBaseline>
            <Grid container>
                <Menu/>
                <Grid item xl={11.5}>
                    <Box height='100%' minHeight='100vh' sx={{bgcolor: '#B3E6EA'}}>
                        <Grid container columnSpacing={2}>
                            <Grid item xl={12} height='10vh'>
                                <Typography marginTop={2} variant='h3' align='center' fontFamily='Lancelot'>
                                    Quotes
                                </Typography>
                            </Grid>
                            <Grid item xl={4} >
                                <Grid container>
                                    {
                                        quotes.map((quote, index) => {
                                            if(index%3 == 0) {
                                                return <Quote ml={2} text={quote.text} author={quote.author}></Quote>
                                            }
                                        })
                                        
                                    }    
                                    
                                </Grid>
                            </Grid>
                            <Grid item xl={4}>
                                <Grid container>
                                    {
                                        quotes.map((quote, index) => {
                                            if(index%3 == 1) {
                                                return <Quote text={quote.text} author={quote.author}></Quote>
                                            }
                                        })
                                    }
                                </Grid>
                            </Grid>
                            <Grid item xl={4}>
                                <Grid container>
                                    {
                                        quotes.map((quote, index) => {
                                            if(index%3 == 2) {
                                                return <Quote mr={2} text={quote.text} author={quote.author}></Quote>
                                            }
                                        })
                                    }
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            </CssBaseline>
        </div>
    )
}



export default Main