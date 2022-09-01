import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { get_all_quotes, reset } from "../features/quotes/quoteSlice"

import StyledQuote from '../components/Quote'

const Main = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {quotes, is_loading, is_error, message} = useSelector((state) => state.quote)

    useEffect( () => {
        if(is_error) {
            console.log(message)
        }

        dispatch(get_all_quotes())

        return () => {
            dispatch(reset())
        }
    }, [navigate, is_error, message, dispatch])

    if(is_loading) {
        return (
            <p>Loading...</p>
        )
    }
    return(
        <div>
            {/* {quotes.map( (quote) => {
                return <StyledQuote
                    className='styled-quote'
                    text={quote.text}
                />
            })} */}
            <StyledQuote
                className='styled-quote'
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce viverra at odio et ultricies. 
                Suspendisse placerat dignissim tortor, id 
                lacinia arcu tincidunt vitae. Nullam aliquet."
                author='Joe Terry'
            />
        </div>
    )
}

export default Main