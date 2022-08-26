const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config()

const {error_handler} = require('./middleware/errorMiddleware')

connectDB()
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/quotes', require('./routes/quote_routes'));
app.use('/api/users', require('./routes/user_routes'));

app.use(error_handler)

app.listen(port ,() => {
    console.log(`App listening on port ${port}`);
})