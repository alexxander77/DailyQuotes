const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    liked_quotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuoteModel'
    }]

}, {
    timestamps: true
})

module.exports = mongoose.model('UserModel', userSchema)