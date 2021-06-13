import React from 'react';
import Navbar from '../Navbar'

function Header() {
    return(
        <div className="header">
            <img src="/bk-logo.png" alt="logo"></img>
            <Navbar />
        </div>
    )
}

export default Header;