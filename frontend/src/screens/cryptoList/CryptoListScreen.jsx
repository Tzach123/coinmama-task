import React from 'react'
import { ERROR_COLOR, ERROR_BACKGROUND_COLOR, ERROR_BORDER_COLOR } from '../../constant/alertColorConstant'
import useFetchCryptoList from '../../hooks/useFetchCryptoList'
import CryptoCardsList from '../../components/domain/cryptoCardsList/CryptoCardsList'
import Loader from '../../components/common/loader/Loader'
import Alert from '../../components/common/alerts/Alert'


const CryptoListScreen = () => {

    const [cryptoList, updatedDateTime, error] = useFetchCryptoList()

    return (
        <div>
            <h1>Crypto List Screen</h1>
            <h3>Updated at {updatedDateTime}</h3>
            {error ? <Alert color={ERROR_COLOR} backgroundColor={ERROR_BACKGROUND_COLOR} borderColor={ERROR_BORDER_COLOR}  >{error}</Alert> :
                !cryptoList ? <Loader /> : <CryptoCardsList cryptoList={cryptoList} />}
        </div>
    )
}

export default CryptoListScreen
