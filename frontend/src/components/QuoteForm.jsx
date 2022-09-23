import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import {create_quote} from "../features/quotes/quoteSlice"

import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';

import Button from '@mui/material/Button';

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
const QuoteForm = () => {

    const [quote_text, set_quote_text] = useState('')
    const [author, set_author] = useState('')

    const dispatch = useDispatch()

    const on_change_text = (e) => {
        set_quote_text(e.target.value)
    }

    const on_change_author = (e) => {
        set_author(e.target.value)
    }

    const on_submit = (e) => {
        e.preventDefault()

        const quote_data = {
            text: quote_text,
            author: author
        }

        dispatch(create_quote(quote_data))
        set_quote_text('')
        set_author('')

    }

    return (
        <>  
            <form onSubmit={on_submit}>
                <Grid item xl={12} height='100vh'>
                    <Grid container>
                        <Grid item xl={12} marginTop={5}>
                            <Typography variant='h4' align='center' gutterBottom fontFamily='Lancelot' >
                                Create Quote
                            </Typography>
                        </Grid>
                        <Grid item xl={12} marginTop={1} marginLeft={10} marginRight={10}>
                            <CustomTextField size='small' multiline fullWidth value={quote_text} onChange={on_change_text} label='Quote' >

                            </CustomTextField>
                        </Grid>
                        <Grid item xl={12} marginTop={1} marginLeft={10} marginRight={10}>
                            <CustomTextField size='small' fullWidth value={author} onChange={on_change_author} label='Author'>

                            </CustomTextField>
                        </Grid>
                        <Grid item xl={12} marginTop={1} marginLeft={10} marginRight={10}>
                            <CustomButton variant="outlined" fullWidth type='submit'>
                                Submit
                            </CustomButton>
                        </Grid>
                    </Grid>

                </Grid>
            </form>
        </>
    )
}

export default QuoteForm