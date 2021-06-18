import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react'

function MyCard(props) {
    return(
        <Card fluid color='red' raised={true}>
            <Image src={props.img} alt="project preview" />
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Description>{props.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button className="card-btn-link" target="_blank"href={`https://github.com/thebsking${props.link}`}>
                    GitHub Repo
                </Button>
                <Button href={props.link2} 
                target="_blank"
                className="card-btn-link">
                    Deployed App
                </Button>
            </Card.Content>
        </Card>
    )
}

export default MyCard;