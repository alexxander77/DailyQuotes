import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'

import { useDispatch } from "react-redux"
import {delete_quote} from "../features/quotes/quoteSlice"

import '@fontsource/lancelot'

const Quote = (props) => {

    const dispatch = useDispatch()
    return (
        <Grid item xl={12}  marginTop={2} marginLeft={props.ml} marginRight={props.mr}>
            <Box sx={{bgcolor: 'white'}} borderRadius='15px'>
                <Grid container>
                {props.flag && <>
                    <Grid item xl={0.5}> 
                        <AiOutlineDelete size={25} onClick={() => dispatch(delete_quote(props.id))}/>
                    </Grid>
                    <Grid item xl={0.5}>
                        <FiEdit size={23}/>
                    </Grid>
                    </>
                }
                </Grid>
                <Typography fontFamily='Lancelot' fontSize={25}  align='center' gutterBottom>
                "{props.text}"
                </Typography>
                <Typography fontFamily='Lancelot' fontSize={25}  align='center' gutterBottom>
                    -{props.author}-
                </Typography>
            </Box>  
        </Grid>
    )
}

export default Quote