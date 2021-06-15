import React from 'react';
import {Card, Image} from 'semantic-ui-react'

function MyCard(props) {
    return(
        <Card>
            <Image src={props.img} alt="project preview" />
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Description>{props.description}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default MyCard;