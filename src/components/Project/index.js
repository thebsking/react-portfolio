import React from 'react';
import Card from '../Card';

function Project() {
    const projectArr = [
        {
            title: 'Loo Review',
            img: '',
            link: ''
        },
        {
            title: 'Loo Review',
            img: '',
            link: ''
        },
        {
            title: 'Loo Review',
            img: '',
            link: ''
        }
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