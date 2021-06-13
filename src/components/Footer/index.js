import React from 'react';

function Footer() {
    const year = new Date().getFullYear()
    return(
        <footer>
            <p>Created by BK &copy; {year}</p>
            <p>Stock images from <a href="https://unsplash.com" rel="noreferrer" target="_blank" >Unsplash</a></p>
        </footer>
    )
}

export default Footer;