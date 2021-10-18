import axios from 'axios'

// create crypto rate in DB
export const createCryptoRate = async (dataBody) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/crypto/rate', dataBody, config)
    console.log(data)
  } catch (error) {
    throw error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  }
}
