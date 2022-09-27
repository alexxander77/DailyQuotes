import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"


import { Typography, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'


import {delete_quote, update_quote} from "../features/quotes/quoteSlice"

import { alpha, styled } from '@mui/material/styles';
import '@fontsource/lancelot'

const CustomButton = styled(Button)({
    borderColor: 'white',
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
            borderColor: '',
        },
        '&:hover fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

const Quote = (props) => {
    const dispatch = useDispatch()
    
    const [edit, set_edit] = useState(false)

    const [quote_text, set_quote_text] = useState(props.text)
    const [author, set_author] = useState(props.author)

    useEffect( () => {
        set_quote_text(props.text)
        set_author(props.author)
    }, [props])
    
    const on_change_text = (e) => {
        set_quote_text(e.target.value)
    }

    const on_change_author = (e) => {
        set_author(e.target.value)
    }

    const on_submit = (e) => {
        e.preventDefault()
        const quote_data = {

            _id: props.id,
            text: quote_text,
            author: author
        }

        dispatch(update_quote(quote_data))

        set_edit(!edit)
        

    }
    return (
        <Grid item xl={12}  marginTop={2} marginLeft={props.ml} marginRight={props.mr}>
            <Box sx={{bgcolor: 'white'}} borderRadius='15px'>
                <Grid container>
                {props.flag && <>
                     
                    <Grid item xl={0.5}> 
                        <AiOutlineDelete size={25} cursor='pointer' onClick={() => dispatch(delete_quote(props.id))}/>
                    </Grid>
                    <Grid item xl={0.5}>
                        <FiEdit size={23} cursor='pointer' onClick={() => set_edit(!edit) }/>
                    </Grid>
                    
                    </>
                }
                </Grid>
                {edit?
                <>
                <form onSubmit={on_submit}>
                <CustomTextField fontFamily='Lancelot' multiline fullWidth value={quote_text} onChange={on_change_text}  fontSize={25}  align='center' gutterBottom>
                </CustomTextField>
                <CustomTextField fontFamily='Lancelot' multiline fullWidth value={author} onChange={on_change_author} fontSize={25}  align='center' gutterBottom>
                </CustomTextField>
                <CustomButton variant="outlined" fullWidth type='submit'>
                    Update
                </CustomButton>
                </form>
                </>:
                <>
                <Typography fontFamily='Lancelot' fontSize={25}  align='center' gutterBottom>
                    "{props.text}"
                </Typography>
                
                <Typography fontFamily='Lancelot' fontSize={25}  align='center' gutterBottom>
                    -{props.author}-
                </Typography>
                </>
                }
            </Box>  
        </Grid>
    )
}

export default Quote