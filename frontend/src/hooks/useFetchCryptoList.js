import React, { useEffect, useState } from 'react'
import { getCryptoList } from '../actions/cryptoCompareActions'
import { createCryptoRate } from '../actions/cryptoAction'
import { TIME_TO_FETCH } from '../constant/cryptoConstant'
import { SYMBOL_CRYPTO_ARRAY } from '../constant/cryptoConstant'
import { cryptoObjToArray } from '../utils/cryptoUtils'

export const useFetchCryptoList = () => {
  const [cryptoList, setCryptoList] = useState()
  const [updatedDateTime, setUpdatedDateTime] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setError(null)
    getCryptoData(false)
    const interval = setInterval(() => {
      getCryptoData(true)
    }, TIME_TO_FETCH)
    return () => clearInterval(interval)
  }, [])

  //The function gets true when the invoke was from Interval
  const getCryptoData = (isInterval) => {
    getCryptoList(SYMBOL_CRYPTO_ARRAY)
      .then(({ RAW, error }) => {
        if (error) {
          setError(error)
        } else {
          const cryptoList = cryptoObjToArray(RAW)
          setUpdatedDateTime(new Date().toLocaleString())
          //I assumed needed to be store the crypto rates all x minutes when I visit the CryptoListScreen screen
          if (isInterval) createCryptoRateList(cryptoList)
          setCryptoList(cryptoList)
        }
      })
      .catch((e) => {
        console.log(e)
        setError(e)
      })
  }

  // create list of crypto rate to DB
  const createCryptoRateList = (cryptoList) => {
    console.log('DB update')
    /*  cryptoList.map((crypto) => {
      createCryptoRate(crypto)
    }) */
  }

  return [cryptoList, updatedDateTime, error]
}

export default useFetchCryptoList
