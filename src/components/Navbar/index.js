import React, { Component } from 'react';
import { Button, Grid, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import './navbar.css'

const VerticalSidebar = ({animation, direction, visible}) => (
    <Sidebar 
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='thin'
    >
        <Menu.Item as='a'>
            <Icon name='home' />
            Home
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='envira gallery'/>
            Portfolio
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='write' />
            Contact
        </Menu.Item>
    </Sidebar>
)

function menuReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_ANIMATION':
            return {...state, animation: action.animation, visible: !state.visible}
        case 'CHANGE_DIMMED':
            return {...state, dimmed: action.dimmed}
        case 'CHANGE_DIRECTION':
            return {...state, direction: action.direction, visible: false }
        default: 
            throw new Error()
    }
}

function menuTransitions() {
    
}

class Navbar extends Component {
    
}

export default Navbar;