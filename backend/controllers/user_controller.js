const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const async_handler = require('express-async-handler')
const User = require('../models/UserModel')
const e = require('express')



const register_user = async_handler(async (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Missing register fields')
    }

    const user_exists = await User.findOne({email})

    if(user_exists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashed_password = await bcrypt.hash(password, salt)

    const user = await User.create({
        name: name,
        email: email,
        password: hashed_password
    })
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generate_token(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Could not register user')
    }
})

const login_user = async_handler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generate_token(user._id),
            liked_quotes: user.liked_quotes
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid login')
    }
})

const get_user = async_handler(async (req, res) => {
    res.status(200).json(req.user)
})

const like_quote = async_handler(async (req, res) => {
    const user = await User.findById(req.user.id)
    if( user.liked_quotes.includes(req.body.quote_id)) {
        res.status(400).json({
            message: `Quote is already liked`
        })
    }
    else {
        const updateQuery = await User.findByIdAndUpdate(req.user.id,{$push: {liked_quotes: req.body.quote_id}} );
        res.status(200).json({
            quote_id: req.body.quote_id,
            message: `Liked quote ${req.body.quote_id}`
            
        })
    }
})

const dislike_quote = async_handler(async (req, res) => {

    const user = await User.findById(req.user.id)
    if(!user.liked_quotes.includes(req.body.quote_id)) {
        res.status(400).json({
            message: `Quote is not liked`
        })
    }
    else {
        const updateQuery = await User.findByIdAndUpdate(req.user.id, {$pull: {liked_quotes: req.body.quote_id}})
        res.status(200).json({
            quote_id: req.body.quote_id,
            message: `Disliked quoute ${req.body.quote_id} `
        })
    }
})

const generate_token = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

module.exports = {
    register_user,
    login_user,
    get_user,
    like_quote,
    dislike_quote,
}