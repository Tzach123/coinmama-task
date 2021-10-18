import axios from 'axios'
import asyncHandler from 'express-async-handler'

//@des  Fetch crypto list
//@route  GET /api/cryptocompare.com/data/pricemultifull
//@access  Public
const pricemultifull = asyncHandler(async (req, res) => {
  const { symbol } = req.query

  const config = {
    params: {
      fsyms: symbol.toString(),
      tsyms: 'USD',
    },
    authorization: {
      Apikey: process.env.API_KEY,
    },
  }

  const { data } = await axios.get(
    'https://min-api.cryptocompare.com/data/pricemultifull',
    config
  )
  res.send(data)
})

//@des  Fetch history crypto by minutes
//@route  GET /api/cryptocompare.com/data/pricemultifull
//@access  Public
const histominute = asyncHandler(async (req, res) => {
  const { limit, fsym, tsym } = req.query
  const config = {
    params: {
      aggregate: 1,
      fsym: fsym,
      limit: limit,
      tsym: tsym,
    },
    authorization: {
      Apikey: process.env.API_KEY,
    },
  }

  const { data } = await axios.get(
    'https://min-api.cryptocompare.com/data/v2/histominute',
    config
  )
  res.send(data)
})

//@des  Fetch history crypto by hour
//@route  GET /api/cryptocompare.com/data/pricemultifull
//@access  Public
const histohour = asyncHandler(async (req, res) => {
  const { limit, fsym, tsym } = req.query
  const config = {
    params: {
      aggregate: 1,
      fsym: fsym,
      limit: limit,
      tsym: tsym,
    },
    authorization: {
      Apikey: process.env.API_KEY,
    },
  }

  const { data } = await axios.get(
    'https://min-api.cryptocompare.com/data/v2/histohour',
    config
  )
  res.send(data)
})

//@des  Fetch history crypto by day
//@route  GET /api/cryptocompare.com/data/pricemultifull
//@access  Public
const histoday = asyncHandler(async (req, res) => {
  const { limit, fsym, tsym } = req.query
  const config = {
    params: {
      aggregate: 1,
      fsym: fsym,
      limit: limit,
      tsym: tsym,
    },
    authorization: {
      Apikey: process.env.API_KEY,
    },
  }

  const { data } = await axios.get(
    'https://min-api.cryptocompare.com/data/v2/histoday',
    config
  )
  res.send(data)
})

export { pricemultifull, histominute, histohour, histoday }
