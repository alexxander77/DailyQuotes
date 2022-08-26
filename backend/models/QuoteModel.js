const mongoose = require('mongoose')

const quote_schema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add Quote text']
    },
    author: {
        type: String,
        required: [true, 'Please add Quote author']
    },
    created_by_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('QuoteModel', quote_schema)