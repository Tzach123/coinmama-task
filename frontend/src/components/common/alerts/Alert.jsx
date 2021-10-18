import React from 'react'
import './alert.css'


const Alert = ({ children, color = 'black', backgroundColor = 'white', borderColor = 'black' }) => {
    return (
        <div className="alert" style={{ color: color, backgroundColor: backgroundColor, borderColor: borderColor }}>
            {children} !
        </div>
    )
}

export default Alert
