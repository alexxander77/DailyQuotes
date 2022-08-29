import { useState } from "react"
import { useEffect } from "react"
import {MdOutlineLogin} from "react-icons/md"

const Login = () => {
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')

    const on_change_email = (e) => {
        set_email(e.target.value)
    }

    const on_change_password = (e) => {
        set_password(e.target.value)
    }

    const on_submit = (e) => {
        e.preventDeafault()
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
                </form>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </section>
        </>
    )
}

export default Login