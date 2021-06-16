import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {
    state = {activeItem: 'home'};

    handleMenuClick = (event, { name }) => {
        this.setState({ activeItem: name })
    }
    render() {
        const { activeItem } = this.state
        
        return (
            <Menu pointing secondary vertical>
                <Menu.Item 
                name='home' 
                active={activeItem === 'home'} 
                onClick={this.handleMenuClick} 
                href="/"
                />
                <Menu.Item name='gallery' 
                active={activeItem === 'gallery'} 
                onClick={this.handleMenuClick}
                href="/gallery"
                />
                <Menu.Item name='contact' 
                active={activeItem === 'contact'} 
                onClick={this.handleMenuClick} 
                href="/contact"
                />
            </Menu>
        )
    }
}

export default Navbar;