import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/database'

import transactionRoute from './routes/transaction'

import pageNotFound from './middlewares/pageNotFound'
import customErrorHandler from './middlewares/customErrorHandler'

import { PORT } from './constants/port'

const colors = require('colors')
const app = express()

dotenv.config()
connectDB()

//application level middleware
app.use(express.json())

//route level middleware
app.use('/api', transactionRoute)
app.use(pageNotFound)
app.use(customErrorHandler)


app.listen(PORT, () => {
    console.log(colors.rainbow(`Listening from port ${PORT}`))

})