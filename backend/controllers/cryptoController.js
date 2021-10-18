import asyncHandler from 'express-async-handler'
import CryptoRate from '../models/cryptoRateModel.js'

//@des  Create a crypto rate
//@route  POST /api/crypto/rate
//@access  Public

const createCryptoRate = asyncHandler(async (req, res) => {
  console.log(req.body)
  const {
    CHANGEPCT24HOUR,
    FROMSYMBOL,
    MKTCAP,
    NAME,
    PRICE,
    TOTALTOPTIERVOLUME24HTO,
    TOTALVOLUME24HTO,
    VOLUME24HOURTO,
  } = req.body

  const cryptoRate = new CryptoRate({
    symbol: FROMSYMBOL,
    name: NAME,
    price: PRICE,
    changeper24hour: CHANGEPCT24HOUR,
    volume24hourto: VOLUME24HOURTO,
    totalvolume24hto: TOTALVOLUME24HTO,
    totaltoptiervolume24hto: TOTALTOPTIERVOLUME24HTO,
    mktcap: MKTCAP,
    createAt: Date.now(),
  })

  const createCryptoRate = await cryptoRate.save()

  res.status(201).json(createCryptoRate)
})

export { createCryptoRate }
