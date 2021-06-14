import React from 'react';
import Card from '../Card';

function Project(props) {
    
    return(
        <div id="project-container">
            {props.map(proj => {
                return <Card {...proj} />
            })}
            {console.log('i made a card!')}
        </div>
    )
}

export default Project;