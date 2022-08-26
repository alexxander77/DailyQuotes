const express = require('express')
const router = express.Router()
const { register_user, login_user, get_user, like_quote, dislike_quote } = require('../controllers/user_controller')

const {protect} = require('../middleware/auth_middleware')
router.post('/', register_user)

router.post('/login', login_user)

router.get('/account', protect, get_user)

router.post('/like', protect, like_quote)

router.post('/dislike', protect, dislike_quote)

module.exports = router