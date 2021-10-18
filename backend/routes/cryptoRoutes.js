import express from 'express'
import { createCryptoRate } from '../controllers/cryptoController.js'

const router = express.Router()

router.route('/rate').post(createCryptoRate)

export default router
