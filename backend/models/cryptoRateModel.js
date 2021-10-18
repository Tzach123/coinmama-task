import mongoose from 'mongoose'

const cryptoRateSchema = mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  changeper24hour: {
    type: Number,
    required: true,
  },
  volume24hourto: {
    type: Number,
    required: true,
  },
  totalvolume24hto: {
    type: Number,
    required: true,
  },
  totaltoptiervolume24hto: {
    type: Number,
    required: true,
  },
  mktcap: {
    type: Number,
    required: true,
  },
  createAt: {
    type: Date,
  },
})

const CryptoRate = mongoose.model('CryptoRate', cryptoRateSchema)

export default CryptoRate
