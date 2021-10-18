import React from 'react'

const Button = ({ text, showLimit, limit, per, onClick }) => {
    const isActive = showLimit === limit ? 'active' : ''
    return (
        <button className={isActive}
            onClick={(e) => onClick(e, limit, per)}>
            {text}
        </button>
    )
}

export default Button
