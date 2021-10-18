import React from "react"
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {

    const clickTarget = (e) => {
        const activeEle = document.querySelector('header li .active')
        if (activeEle)
            activeEle.classList.remove('active')
        e.target.classList.add('active')

    }

    return (
        <header>
            <ul>
                <li><Link to='/cryptolist' className='home' onClick={clickTarget} >home</Link></li>
                <li><Link to='/cryptolist' onClick={clickTarget} >Crypto List</Link></li>
                <li><Link to='/cryptohistory' onClick={clickTarget}>Crypto history</Link></li>
            </ul>
        </header>
    )
}

export default Header
