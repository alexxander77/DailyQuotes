const express = require('express')
const router = express.Router()

const {get_quotes, post_quote, put_quote, delete_quote} = require('../controllers/quote_controller')

const { protect } = require('../middleware/auth_middleware')

router.get('/', get_quotes)

router.post('/',protect, post_quote)

router.put('/:id',protect, put_quote)

router.delete('/:id',protect, delete_quote)

module.exports = router