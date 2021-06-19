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
            description: 'Think of it as Yelp for bathrooms. This web app utilizes your location to show you the nearest public restrooms, complete with user reviews. ',
            link2: 'https://the-loo-review.herokuapp.com'
        },
        {
            title: 'Weather Search',
            img: '/assets/weather-search.gif',
            link: '/weather-search',
            description: 'A simple web app utilizing the OpenWeather API that allows you to search current and future forecast data.',
            link2: 'https://thebsking.github.io/weather-search'
        },
        {
            title: 'Budget App',
            img: '/assets/screenshot.png',
            link: '/pwa-budget',
            description: 'A Progressive Web App that allows you to track credits and debits. Functionality continues when offline.',
            link2: 'https://secret-castle-86990.herokuapp.com/'
        }, {
            title: 'Tech Blog',
            img: '/assets/preview.gif',
            link: 'tech-blog',
            description: 'A CMS style blogging site. Users can login to see their posts and comment on posts from others.',
            link2: 'https://dry-tor-12057.herokuapp.com/'
        },
        {
            title: 'Employee Directory',
            img: '/assets/sorted.png',
            link: '/react-directory',
            description: 'Built with react, a simple interface allows you to see all of your companies employees in an easy to sort list.',
            link2: 'https://thebsking.github.io/react-directory'
        },
        {
            title: 'Fleet Sheets',
            img: '%PUBLIC_URL%/assets/fleetsheets.png',
            link: '/FleetSheets',
            description: 'Built with react, a simple interface allows you to see all of your companies employees in an easy to sort list.',
            link2: '/notfound'
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