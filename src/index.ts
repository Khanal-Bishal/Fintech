import express from 'express'
import dotenv from 'dotenv'

const colors = require('colors')
const app = express()

import connectDB from './config/database'
dotenv.config()
connectDB()

import transactionRoute from './routes/transaction'
import pageNotFound from './middlewares/pageNotFound'

import { PORT } from './constants/port'


//application level middleware
app.use(express.json())

//route level middleware
app.use('/api', transactionRoute)
app.use(pageNotFound)

app.listen(PORT, () => {
    console.log(colors.rainbow(`Listening from port ${PORT}`))

})