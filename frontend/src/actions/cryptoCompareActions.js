import axios from 'axios'

/** Fetching data from the cryptocompare.com API */

export const getCryptoList = async (cryptoList) => {
  try {
    const config = {
      params: {
        symbol: cryptoList,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(
      '/api/cryptocompare.com/data/pricemultifull',
      config
    )
    return data
  } catch (error) {
    throw error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  }
}

export const getCryptoMinuteHistory = async (crypto, limit) => {
  try {
    const config = {
      params: {
        limit: limit,
        fsym: crypto,
        tsym: 'USD',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(
      '/api/cryptocompare.com/data/histominute',
      config
    )
    return data
  } catch (error) {
    throw error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  }
}

export const getCryptoHourlyHistory = async (crypto, limit) => {
  try {
    const config = {
      params: {
        limit: limit,
        fsym: crypto,
        tsym: 'USD',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(
      '/api/cryptocompare.com/data/histohour',
      config
    )
    return data
  } catch (error) {
    throw error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  }
}

export const getCryptoDailyHistory = async (crypto, limit) => {
  try {
    const config = {
      params: {
        limit: limit,
        fsym: crypto,
        tsym: 'USD',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(
      '/api/cryptocompare.com/data/histoday',
      config
    )
    return data
  } catch (error) {
    throw error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  }
}
