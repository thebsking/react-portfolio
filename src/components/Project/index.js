import React from 'react';
import MyCard from '../MyCard';
import { Card } from 'semantic-ui-react';
import './project.css'

function Project() {
    const projectArr = [
        {
            title: 'Loo Review',
            img: '/assets/loo-review.gif',
            link: '/Project-02',
            description: 'Think of it as Yelp for bathrooms. This web app utilizes your location to show you the nearest public restrooms, complete with user reviews. '
        },
        {
            title: 'Weather Search',
            img: '/assets/weather-search.gif',
            link: '/weather-search',
            description: 'A simple web app utilizing the OpenWeather API that allows you to search current and future forecast data. '
        },
        {
            title: 'Budget App',
            img: '/assets/screenshot.png',
            link: '/pwa-budget',
            description: 'A Progressive Web App that allows you to track credits and debits. Functionality continues when offline.'
        }, {
            title: 'Tech Blog',
            img: '/assets/preview.gif',
            link: 'tech-blog',
            description: 'A CMS style blogging site. Users can login to see their posts and comment on posts from others.'
        },
        {
            title: 'Employee Directory',
            img: '/assets/sorted.png',
            link: '/react-directory',
            description: 'Built with react, a simple interface allows you to see all of your companies employees in an easy to sort list.'
        },
        {
            title: 'Fleet Sheets',
            img: '/logo192.png',
            link: '/FleetSheets',
            description: 'Built with react, a simple interface allows you to see all of your companies employees in an easy to sort list.'
        },

    ]
    return (
        <div id="project-container">
            <Card.Group centered stackable itemsPerRow={2}>
                {projectArr.map(proj => {
                    return <MyCard {...proj} />
                })}
            </Card.Group>
        </div>
    )
}

export default Project;