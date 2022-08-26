const async_handler = require('express-async-handler')

const Quote = require('../models/QuoteModel')

const get_quotes = async_handler(async (req, res) => {

    const quotes = await Quote.find();

    res.status(200).send(quotes)
})

const post_quote = async_handler(async (req, res) => {

    if (!req.body.text || !req.body.author) {
        res.status(400)
        throw new Error('Please add text field')
    }
    const quote = await Quote.create({
        text: req.body.text,
        author: req.body.author,
        created_by_user: req.user.id
    })
    res.status(200).send('Hello Post World')

})

const put_quote = async_handler(async (req, res) => {
    const quote = await Quote.findById(req.params.id)

    if(!quote) {
        res.status(400)
        throw new Error('Quote not found')
    }
    if(quote.created_by_user != req.user.id) {
        res.status(400)
        throw new Error('Only quote creator can modify a quote')
    }
    const updateQuote = await Quote.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    res.status(200).send(updateQuote)
})

const delete_quote = async_handler(async (req, res) => {
    const quote = await Quote.findById(req.params.id)

    if(!quote) {
        res.status(400)
        throw new Error('Quote not found')
    }

    if(quote.created_by_user != req.user.id) {
        res.status(400)
        throw new Error('Only quote creator can delete the quote')
    }

    await quote.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    get_quotes,
    post_quote,
    put_quote,
    delete_quote
}