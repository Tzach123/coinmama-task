import React from 'react'
import PropTypes from 'prop-types'
import './cryptoBox.css'
import { sumCoefficient } from '../../../utils/numbersUtils'

function CryptoBox({ SYMBOL, PRICE, CHANGEPCT24HOUR, VOLUME24HOURTO, TOTALVOLUME24HTO, TOTALTOPTIERVOLUME24HTO, MKTCAP }) {

    return (
        <div className='crypto-box'>
            <div className='crypto-description'>
                <h3 >{SYMBOL}-USD</h3>
                <h1 className='price'>${PRICE.toFixed(3)}</h1>
            </div>
            <div className='crypto-details-list'>
                <div className='crypto-detail'>
                    <span>24(%):</span>
                    <div className={`${CHANGEPCT24HOUR < 0 ? 'red' : 'green'} indicates-percent-div`}>
                        <span>{CHANGEPCT24HOUR.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='crypto-detail'>
                    <span>Direct Vol:</span>
                    <div className={` indicates-percent-div`}>
                        <span>${sumCoefficient(VOLUME24HOURTO)}</span>
                    </div>
                </div>
                <div className='crypto-detail'>
                    <span>Total Vol:</span>
                    <div className={`indicates-percent-div`}>
                        <span>${sumCoefficient(TOTALVOLUME24HTO)}</span>
                    </div>
                </div>
                <div className='crypto-detail'>
                    <span>Top Tier Vol:</span>
                    <div className={`indicates-percent-div`}>
                        <span>${sumCoefficient(TOTALTOPTIERVOLUME24HTO)}</span>
                    </div>
                </div>
                <div className='crypto-detail'>
                    <span>Market Cap:</span>
                    <div className={` indicates-percent-div`}>
                        <span>${sumCoefficient(MKTCAP)}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

CryptoBox.propTypes = {
    PRICE: PropTypes.number,
    VOLUME24HOURTO: PropTypes.number,
    TOTALVOLUME24HTO: PropTypes.number,
    TOTALTOPTIERVOLUME24HTO: PropTypes.number,
    MKTCAP: PropTypes.number
}

export default CryptoBox


