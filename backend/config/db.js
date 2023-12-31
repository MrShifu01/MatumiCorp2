const mongoose = require("mongoose");

const url = process.env.MONGO_URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (e) {
        console.log(`Error: ${e}`)
        process.exit(1)
    }
}

module.exports =  connectDB