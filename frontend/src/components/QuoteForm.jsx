import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import {create_quote} from "../features/quotes/quoteSlice"

const QuoteForm = () => {

    const [quote_text, set_quote_text] = useState('')
    const [author, set_author] = useState('')

    const dispatch = useDispatch()

    const on_change_text = (e) => {
        set_quote_text(e.target.value)
    }

    const on_change_author = (e) => {
        set_author(e.target.value)
    }

    const on_submit = (e) => {
        e.preventDefault()

        const quote_data = {
            text: quote_text,
            author: author
        }

        dispatch(create_quote(quote_data))
        set_quote_text('')
        set_author('')

    }

    return (
        <section>
            <form onSubmit={on_submit}>
                <div>
                <input type="text" name="text" id="text" value={quote_text} onChange={on_change_text}></input>
                </div>
                <div>
                    <input type="text" name="author" id="author" value={author} onChange={on_change_author}></input>
                </div>
                <div>
                    <button type="submit">Submit Quote</button>
                </div>
            </form>
        </section>
    )
}

export default QuoteForm