import { BTC_USD, ETH_USD, LTC_USD } from '../constant/cryptoConstant'

export const nameOrderBySymbol = (symbol) => {
  switch (symbol) {
    case BTC_USD:
      return 'Bitcoin'
    case ETH_USD:
      return 'Ethereum'
    case LTC_USD:
      return 'Litecoin'
    default:
      return ''
  }
}

export const cryptoObjToArray = (obj) => {
  const arr = []
  Object.keys(obj).map((crypto) => {
    const {
      FROMSYMBOL,
      PRICE,
      CHANGEPCT24HOUR,
      VOLUME24HOURTO,
      TOTALVOLUME24HTO,
      TOTALTOPTIERVOLUME24HTO,
      MKTCAP,
      IMAGEURL,
    } = obj[crypto].USD

    arr.push({
      NAME: nameOrderBySymbol(FROMSYMBOL),
      FROMSYMBOL,
      PRICE,
      CHANGEPCT24HOUR,
      VOLUME24HOURTO,
      TOTALVOLUME24HTO,
      TOTALTOPTIERVOLUME24HTO,
      MKTCAP,
      IMAGEURL,
    })
  })
  return arr
}
