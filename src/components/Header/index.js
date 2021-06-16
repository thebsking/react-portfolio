import React from 'react';
import Navbar from '../Navbar'
import './header.css'

function Header() {
    return(
        <div className="header">
            <img id="bk-logo" src="/bk-logo.png" alt="logo"></img>
            <Navbar />
        </div>
    )
}

export default Header;