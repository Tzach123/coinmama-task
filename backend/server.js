import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

import apiCryptocompareRoutes from './routes/apiCryptocompareRoutes.js'
import cryptoRoutes from './routes/cryptoRoutes.js'

dotenv.config()

connectDB()
const app = express()
app.use(express.json())

app.use('/api/cryptocompare.com/data', apiCryptocompareRoutes)
app.use('/api/crypto', cryptoRoutes)

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running on port ${PORT}`.yellow.bold))
