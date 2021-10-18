import express from 'express'
import {
  pricemultifull,
  histominute,
  histohour,
  histoday,
} from '../controllers/apiCryptocompareController.js'

const router = express.Router()

router.route('/pricemultifull').get(pricemultifull)
router.route('/histominute').get(histominute)
router.route('/histohour').get(histohour)
router.route('/histoday').get(histoday)

export default router
