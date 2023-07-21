const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 8000
const connectDB = require('./config/db')

connectDB()

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.listen(PORT, console.log(`Server running on port ${PORT}`))