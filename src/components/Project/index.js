import React from 'react';
import Card from '../Card';

function Project() {
    const projectArr = [
        {
            title: 'Loo Review',
            img: '/logo192.png',
            link: '/loo-review'
        },
        {
            title: 'Weather Search',
            img: '/logo192.png',
            link: '/weather-search'
        },
        {
            title: 'Budget App',
            img: '/logo192.png',
            link: '/pwa-budget'
        },{
            title: 'Tech Blog',
            img: '/logo192.png',
            link: 'tech-blog'
        },
        {
            title: 'Employee Directory',
            img: '/logo192.png',
            link: 'react-directory'
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