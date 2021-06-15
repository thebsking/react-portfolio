import React from 'react';
import Card from '../Card';

function Project() {
    const projectArr = [
        {
            title: 'Loo Review',
            img: '/logo192.png',
            link: ''
        },
        {
            title: 'Weather Search',
            img: '/logo192.png',
            link: ''
        },
        {
            title: 'Budget App',
            img: '/logo192.png',
            link: ''
        },{
            title: 'Tech Blog',
            img: '/logo192.png',
            link: ''
        },
        {
            title: 'Employee Directory',
            img: '/logo192.png',
            link: ''
        },

    ]
    return(
        <div id="project-container">
            {projectArr.map(proj => {
                return <Card {...proj} />
            })}
            {console.log('i made a card!')}
        </div>
    )
}

export default Project;