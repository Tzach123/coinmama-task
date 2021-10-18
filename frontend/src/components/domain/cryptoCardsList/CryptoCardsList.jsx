import React from 'react'
import { Card, CardHeader, CardBody } from '../../common/card/Card'
import CryptoBox from '../cryptoBox/CryptoBox'
import './cryptoCardsList.css'


const CryptoCardsList = ({ cryptoList, location }) => {

    console.log(cryptoList);

    const cardsCryptoList = cryptoList.length && cryptoList.map((crypto) => {


        return (
            <Card key={crypto.FROMSYMBOL} className='cryptoListItem'>
                <CardHeader symbol={crypto.FROMSYMBOL} name={crypto.NAME} logo={crypto.IMAGEURL} />
                <CardBody>
                    <CryptoBox
                        SYMBOL={crypto.FROMSYMBOL}
                        PRICE={Number(crypto.PRICE)}
                        CHANGEPCT24HOUR={Number(crypto.CHANGEPCT24HOUR)}
                        VOLUME24HOURTO={Number(crypto.VOLUME24HOURTO)}
                        TOTALVOLUME24HTO={Number(crypto.TOTALVOLUME24HTO)}
                        TOTALTOPTIERVOLUME24HTO={Number(crypto.TOTALTOPTIERVOLUME24HTO)}
                        MKTCAP={Number(crypto.MKTCAP)}
                    />
                </CardBody>
            </Card>)
    })

    return (
        <div className='cryptoList'>
            {cardsCryptoList}
        </div>
    )
}

export default CryptoCardsList
