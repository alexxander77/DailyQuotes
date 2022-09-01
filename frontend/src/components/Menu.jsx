import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

import {FaHome} from "react-icons/fa"
import {CgLogIn, CgProfile} from "react-icons/cg"
import {GoSignOut} from "react-icons/go"
import {AiFillHeart} from "react-icons/ai"
import {MdLogin, MdOutlineLogin} from "react-icons/md"


const Menu = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const on_logout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <div className={props.className}>
            <StyledHomeButton
                className="home-button"
            />
            <StyledLine
                className="menu-line"
            />
            {user ? (
            <>
            <StyledProfileButton
                className="profile-button"
            />
            <StyledSignOutButton
                className="signout-button"
                on_logout={on_logout}
            />
            <StyledLikedButton
            className="liked-button"
            />
            </>
            )
            :
            <StyledLoginButton
                className="login-button"
            />
            }
            
        </div>
    )
}

const HomeButton = (props) => {
    return (
        <div className={props.className}>
            <FaHome 
                size="30px"
            />
        </div>
    )
}

const Line = (props) => {
    return (
        <div className={props.className}>
            
        </div>
    )
}

const ProfileButton = (props) => {
    return (
        <div className={props.className}>
            <CgProfile
                size="30px"
            />
        </div>
    )
}

const SignOutButton = (props) => {
    return (
        <div className={props.className}>
            <GoSignOut
                onClick={props.on_logout}
                size="30px"
            />
        </div>
    )
}

const LikedButton = (props) => {
    return (
        <div className={props.className}>
            <AiFillHeart
                size="30px"
            />
        </div>
    )
}

const LoginButton = (props) => {
    return (
        <div className={props.className}>
            <CgProfile
                size="30px"
            />
        </div>
    )
}

const RegisterButton = (props) => {
    return (
        <div className={props.className}>

        </div>
    )
}

const StyledLoginButton = styled(LoginButton)`
    position: absolute;
    left: 35%;
    right: 35%;
    top: 14.2%;
    bottom: 83.2%;
`

const StyledLikedButton = styled(LikedButton)`
    position: absolute;
    left: 35%;
    right: 35%;
    top: 23.8%;
    bottom: 73.6%;


`
const StyledSignOutButton = styled(SignOutButton)`
    position: absolute;
    left: 35%;
    right: 35%;
    top: 33.4%;
    bottom: 64%;



    cursor: pointer;


`

const StyledProfileButton = styled(ProfileButton)`
    position: absolute;
    left: 35%;
    right: 35%;
    top: 14.2%;
    bottom: 83.2%;


`
const StyledLine = styled(Line)`
    position: absolute;
    left: 13.54%;
    right: 13.54%;
    top: 10.6%;
    bottom: 89.3%;

    background: #000000;
    opacity: 1;
    border-radius: 71.5px;
`

const StyledHomeButton = styled(HomeButton)`
    position: absolute;
    left: 35%;
    right: 35%;
    top: 4%;
    bottom: 92.4%;

    
`

const StyledMenu = styled(Menu)`

    position: absolute;
    width: 100px;
    height: 100%;
    left: 0px;
    top: 0px;


    background: #2ECC71;
    border-radius: 0px 20px 20px 0px;


`

export default StyledMenu