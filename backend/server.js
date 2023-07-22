const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 8000
const connectDB = require('./config/db')
const transactionRoutes = require('./routes/transactionRoutes')
const cors = require('cors')

connectDB()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', '*']
}))

app.use('/api/transactions', transactionRoutes)

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.listen(PORT, console.log(`Server running on port ${PORT}`))