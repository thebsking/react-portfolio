import React from 'react';
import Card from '../Card';

function Project() {
    const projectList = [
        {
            title: 'The Loo Review',
            image: 'add a link here',
            description: 'find yo self a tur-let'
        },
        {
            title: 'Weather Search',
            image: '/public/bk-headshot.png',
            description: '*not an actual project image'
        },
        {
            title: 'another PJ',
            image: '/bk-headshot.png',
            description: "i'm very bad at writing these things especially in a testing environment where they don't really mean anything"
        }
    ]
    return(
        <div id="project-container">
            {projectList.map(proj => {
                return <Card {...proj} />
            })}
            {console.log('i made a card!')}
        </div>
    )
}

export default Project;