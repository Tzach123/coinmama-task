import React from 'react'
import './btnGtoup.css'

const BtnGtoup = ({ children }) => {
    return (
        <div className='btn-group'>
            {children}
        </div>
    )
}

export default BtnGtoup
