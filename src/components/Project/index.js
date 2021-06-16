import React from 'react';
import MyCard from '../MyCard';
import { Card } from 'semantic-ui-react';
import './project.css'

function Project() {
    const projectArr = [
        {
            title: 'Loo Review',
            img: '/logo192.png',
            link: '/loo-review',
            description: 'Think of it as Yelp for bathrooms. This web app utilizes your location to show you the nearest public restrooms, complete with user reviews. '
        },
        {
            title: 'Weather Search',
            img: '/logo192.png',
            link: '/weather-search',
            description: 'A simple web app utilizing the OpenWeather API that allows you to search current and future forecast data. '
        },
        {
            title: 'Budget App',
            img: '/logo192.png',
            link: '/pwa-budget',
            description: 'A Progressive Web App that allows you to track credits and debits. Functionality continues when offline.'
        }, {
            title: 'Tech Blog',
            img: '/logo192.png',
            link: 'tech-blog',
            description: 'A CMS style blogging site. Users can login to see their posts and comment on posts from others.'
        },
        {
            title: 'Employee Directory',
            img: '/logo192.png',
            link: 'react-directory',
            description: 'Built with react, a simple interface allows you to see all of your companies employees in an easy to sort list.'
        },

    ]
    return (
        <div id="project-container">
            <Card.Group>
                {projectArr.map(proj => {
                    return <MyCard {...proj} />
                })}
            </Card.Group>
        </div>
    )
}

export default Project;