import { useState } from "react"
import { useEffect } from "react"
import {MdOutlineLogin} from "react-icons/md"


import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {login, reset} from "../features/auth/authSlice"

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
            navigate('/')
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
        <>
            <section>
                <h1>
                <MdOutlineLogin/> Login
                </h1>
                <p>Login into account</p>
            </section>

            <section>
                <form onSubmit={on_submit}>
                    <div>
                        <input type="email" id="email" name='email' value={email} placeholder="Enter email" onChange={on_change_email}></input>
                    </div>
                    <div>
                        <input type="password" id="password1" name='password' value={password} placeholder="Enter password" onChange={on_change_password}></input>
                    </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                </form>
            </section>
        </>
    )
}

export default Login