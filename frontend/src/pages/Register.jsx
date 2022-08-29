import { useState } from "react"
import { useEffect } from "react"

import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"

import {toast} from 'react-toastify'

import {register, reset} from '../features/auth/authSlice'

import {FaUser} from "react-icons/fa"

const Register = () => {

    const [name, set_name] = useState('')
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')
    const [password2, set_password2] = useState('')

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

    const on_change_name = (e) => {
        set_name(e.target.value)
    }

    const on_change_email = (e) => {
        set_email(e.target.value)
    }

    const on_change_password = (e) => {
        set_password(e.target.value)
    }

    const on_change_password2 = (e) => {
        set_password2(e.target.value)
    }

    const on_submit = (e) => {
        e.preventDefault()

        if(password != password2) {
            toast.error('Passwords are not matching')
        }
        else {
            const user_data = {
                name,
                email,
                password,
            }
            dispatch(register(user_data))
        }
    }

    if (is_loading) {
        return <p>Loading</p>
    }
  
    return(
        <>
            <section>
                <h1>
                <FaUser/> Register
                </h1>
                <p>Create an account</p>
            </section>

            <section>
                <form onSubmit={on_submit}>
                    <div>
                        <input type="text" id="name" name='name' value={name} placeholder="Enter name" onChange={on_change_name}></input>
                    </div>
                    <div>
                        <input type="email" id="email" name='email' value={email} placeholder="Enter email" onChange={on_change_email}></input>
                    </div>
                    <div>
                        <input type="password" id="password1" name='password' value={password} placeholder="Enter password" onChange={on_change_password}></input>
                    </div>
                    <div>
                        <input type="password" id="password2" name='password2' value={password2} placeholder="Enter password" onChange={on_change_password2}></input>
                    </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                </form>
            </section>
        </>
    )
}

export default Register