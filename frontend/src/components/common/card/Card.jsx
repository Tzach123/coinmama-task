import React from "react"
import './card.css'

const Card = ({ children, className }) => {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    )
}

const CardHeader = ({ symbol, logo, name }) => {

    const clickTarget = () => {
        window.location.href = `/cryptohistory/${symbol}`
    }

    return <div className='card-header' onClick={clickTarget}>
        <img src={`https://www.cryptocompare.com${logo}`} alt={symbol}></img>
        <h1>{name}</h1>
    </div>
}

const CardBody = ({ children }) => {
    return (
        <div className='card-body'>
            {children}
        </div>
    )
}

export { Card, CardBody, CardHeader }
