const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
        console.log(`Connected to mongo ${conn.connection.host}`)
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;