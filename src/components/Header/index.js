import React from 'react';
import Navbar from '../Navbar';
import './header.css'

function Header() {
    return(
        <div className='header-wrapper'>
        <div className="top-header">
            <img id="bk-logo" src="/bk-logo.png" alt="logo"></img>
            <h1 className="shine">codeByBk</h1>
        </div>
        <Navbar />
        </div>
    )
}

export default Header;