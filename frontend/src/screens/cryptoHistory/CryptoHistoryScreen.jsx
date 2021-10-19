import React from 'react'
import { MINUTE, DAILY, HOURLY, ONE_HOUR, ONE_DAY, ONE_WEEK, ONE_MOUNTH, THREE_MOUNTH, SIX_MOUNTH, ONE_YEAR, THREE_YEAR, FIVE_YEAR } from '../../constant/perHistoryTimeConstant'
import { SYMBOL_CRYPTO_ARRAY } from '../../constant/cryptoConstant'
import { ERROR_COLOR, ERROR_BACKGROUND_COLOR, ERROR_BORDER_COLOR, INFO_COLOR, INFO_BACKGROUND_COLOR, INFO_BORDER_COLOR } from '../../constant/alertColorConstant'
import Charts from '../../components/common/chart/Charts'
import BtnGtoup from '../../components/common/button/BtnGtoup'
import Button from '../../components/common/button/Button'
import Loader from '../../components/common/loader/Loader'
import Alert from '../../components/common/alerts/Alert'
import { nameOrderBySymbol } from '../../utils/cryptoUtils'

import useFetchHistoryCrypto from '../../hooks/useFetchHistoryCrypto'



const CryptoHistoryScreen = ({ history, match }) => {

    const symbol = match.params.symbol
    const [limit, cryptoHistory, error, setLimit, setPer] = useFetchHistoryCrypto(symbol)

    const clickTarget = (e, newLimit, perTime) => {
        const activeEle = document.querySelector('.btn-group .active')
        if (activeEle)
            activeEle.classList.remove('active')
        e.target.classList.add('active')

        setLimit(newLimit)
        setPer(perTime)
    }

    const symbolOptions = SYMBOL_CRYPTO_ARRAY.map((item) => {
        const name = nameOrderBySymbol(item)
        return <option value={item}>
            {item} - {name}
        </option>
    })


    const changeTarget = (e) => {
        if (e.target.value)
            history.push(`/cryptohistory/${e.target.value}`)
    }

    return (
        <div>
            {symbol &&
                <>
                    <h1>{nameOrderBySymbol(symbol)}</h1>
                    <h2>{symbol}-USD</h2>
                </>}
            <select onChange={changeTarget} value={symbol} style={{ padding: '8.5px' }}>
                <option key='0' value={0}>Choose Crypto</option>
                {symbolOptions}
            </select>
            {!symbol ? <Alert color={INFO_COLOR} backgroundColor={INFO_BACKGROUND_COLOR} borderColor={INFO_BORDER_COLOR}>You must choose a crypto symbol</Alert>
                : error ? <Alert color={ERROR_COLOR} backgroundColor={ERROR_BACKGROUND_COLOR} borderColor={ERROR_BORDER_COLOR}>{error}</Alert> : !cryptoHistory ? <Loader /> :
                    <>
                        <Charts data={cryptoHistory} />
                        <BtnGtoup>
                            <Button text='1 Hour' showLimit={limit} limit={ONE_HOUR} per={MINUTE} onClick={clickTarget} />
                            <Button text='1 Day' showLimit={limit} limit={ONE_DAY} per={MINUTE} onClick={clickTarget} />
                            <Button text='1 Week' showLimit={limit} limit={ONE_WEEK} per={HOURLY} onClick={clickTarget} />
                            <Button text='1 Mounth' showLimit={limit} limit={ONE_MOUNTH} per={HOURLY} onClick={clickTarget} />
                            <Button text='3 Mounths' showLimit={limit} limit={THREE_MOUNTH} per={DAILY} onClick={clickTarget} />
                            <Button text='6 Mounths' showLimit={limit} limit={SIX_MOUNTH} per={DAILY} onClick={clickTarget} />
                            <Button text='1 Year' showLimit={limit} limit={ONE_YEAR} per={DAILY} onClick={clickTarget} />
                            <Button text='3 Year' showLimit={limit} limit={THREE_YEAR} per={DAILY} onClick={clickTarget} />
                            <Button text='5 Year' showLimit={limit} limit={FIVE_YEAR} per={DAILY} onClick={clickTarget} />
                        </BtnGtoup>
                    </>
            }

        </div>
    )
}

export default CryptoHistoryScreen
