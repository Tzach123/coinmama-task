import { useEffect, useState } from 'react'
import {
  MINUTE,
  DAILY,
  HOURLY,
  ONE_DAY,
} from '../constant/perHistoryTimeConstant'
import {
  getCryptoMinuteHistory,
  getCryptoHourlyHistory,
  getCryptoDailyHistory,
} from '../actions/cryptoCompareActions'

export const useFetchHistoryCrypto = (symbol) => {
  const [limit, setLimit] = useState(ONE_DAY)
  const [per, setPer] = useState(MINUTE)
  const [cryptoHistory, setCryptoHistory] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    //Overrides the previous cryptoHistory object to wake up the Loader div
    setCryptoHistory(null)
    getCryptoHistory()
  }, [symbol, limit, per])

  const getCryptoHistory = () => {
    switch (per) {
      case MINUTE:
        getCryptoMinuteHistory(symbol, limit)
          .then(({ Data, error }) => {
            if (error) {
              setError(error)
            } else {
              setCryptoHistory(Data)
            }
          })
          .catch((e) => {
            console.log(e)
            setError(e)
          })
        break
      case HOURLY:
        getCryptoHourlyHistory(symbol, limit)
          .then(({ Data, error }) => {
            if (error) {
              setError(error)
            } else {
              setCryptoHistory(Data)
            }
          })
          .catch((e) => {
            console.log(e)
            setError(e)
          })
        break
      case DAILY:
        getCryptoDailyHistory(symbol, limit)
          .then(({ Data, error }) => {
            if (error) {
              setError(error)
            } else {
              setCryptoHistory(Data)
            }
          })
          .catch((e) => {
            console.log(e)
            setError(e)
          })
        break
    }
  }

  return [limit, cryptoHistory, error, setLimit, setPer]
}

export default useFetchHistoryCrypto
