import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './navbar.css'

class Navbar extends Component {
    state = {}

    handleItemClick = (evt, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Menu stackable inverted id='main-nav'>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    href='/'
                    color='red'
                >
                    home
                </Menu.Item>
                <Menu.Item
                    name='portfolio'
                    active={activeItem === 'portfolio'}
                    onClick={this.handleItemClick}
                    href='/gallery'
                    color='red'
                >
                    portfolio
                </Menu.Item>
                <Menu.Item
                    color='red'
                    name='contact'
                    active={activeItem === 'contact'}
                    onClick={this.handleItemClick}
                    href='/contact'
                >
                    contact
                </Menu.Item>

            </Menu>
        )
    }
}


export default Navbar;