import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { get_all_quotes, reset } from "../features/quotes/quoteSlice"


import QuoteForm from "../components/QuoteForm"
const User = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const {quotes, is_loading, is_error, message} = useSelector((state) => state.quote)

    useEffect( () => {
        if(!user) {
            navigate('/login')
        }
        if(is_error) {
            console.log(message)
        }

        dispatch(get_all_quotes())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, is_error, message, dispatch])

    return(
        <div>
        <section>
            <h1>Quotes by {user.name}</h1>
            
        </section>

        <QuoteForm/>

        <section>
            {quotes.map(quote => {
                if(quote.created_by_user == user._id) { 
                    return <p key={quote._id}>{quote.text}</p>
                }
            })}
        </section>
        </div>

        
    )
}

export default User