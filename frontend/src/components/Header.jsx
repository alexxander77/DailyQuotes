
import {MdOutlineLogin} from "react-icons/md"
import {GoSignOut} from "react-icons/go"
import {AiOutlineUser} from "react-icons/ai"

import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const on_logout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <header>
            <div>
                <Link to="/"> QuoteSetter</Link>
            </div>
            <ul>
                {user ? (
                <li>
                    <button onClick={on_logout}>
                        <GoSignOut/> SignOut
                    </button>
                </li>
                ): (<>
                <li>
                    <Link to='/login'>
                        <MdOutlineLogin/> Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <AiOutlineUser/> Register
                    </Link>
                </li></>)
                }
            </ul>
        </header>
    )
}

export default Header;