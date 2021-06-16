import React from 'react';
import 'semantic-ui-react'
import './navbar.css';

function Navbar() {
    return (
        <ul>
            <li className="item">
                <a href='/'>Home</a>
            </li>
            <li className="item">
                <a href='/gallery'>Portfolio</a>
            </li>
            <li className="item" >
                <a href='/contact'>Contact</a>
            </li>
        </ul>
    )
}

export default Navbar;