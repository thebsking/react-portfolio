import React from 'react';
import './footer.css'

function Footer() {
    const year = new Date().getFullYear()
    return(
        <div className="foot-container">
        <footer>
            <p>Created by BK &copy; {year}</p>
            <p>Stock images from <a href="https://unsplash.com" rel="noreferrer" target="_blank" >Unsplash</a></p>
        </footer>
        </div>
    )
}

export default Footer;