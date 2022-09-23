import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


import {FaHome} from "react-icons/fa"
import {CgLogIn, CgProfile} from "react-icons/cg"
import {GoSignOut} from "react-icons/go"
import {AiFillHeart} from "react-icons/ai"
import {MdLogin, MdOutlineLogin} from "react-icons/md"
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillChatQuoteFill} from "react-icons/bs"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container"
import { MenuList, MenuItem, CssBaseline } from '@mui/material'


const Menu = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const on_logout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    const navigate_home = () => {
        navigate('/')
    }

    const navigate_login = () => {
        navigate('/login')
    }
    return (
                <Grid item xl={0.5}>
                    <Box height='100%' minHeight='100vh' sx={{bgcolor: '#2ECC71'}}>
                        <MenuList sx={{position: 'fixed', marginLeft: '8px'}}>
                            <MenuItem>
                                <BsFillChatQuoteFill size={35} onClick={navigate_home} cursor='pointer' />
                            </MenuItem>
                            <MenuItem>
                                <AiOutlineUser size={35} onClick={navigate_login} cursor='pointer'/>
                            </MenuItem>
                            {user && ( <>
                                    <MenuItem>
                                        <AiFillHeart size={35} cursor='pointer'/>
                                    </MenuItem>
                                    <MenuItem>
                                        <GoSignOut size={35} cursor='pointer' onClick={on_logout}/>
                                    </MenuItem>
                                    </>
                                )

                            }
                        </MenuList> 
                    </Box>
                </Grid>
            
    )
}


export default Menu