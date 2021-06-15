import React from 'react';

function Card(props) {
    return(
        <div className="card">
            <div className="card-header">
                <h2>{props.title}</h2>
            </div>
            <div className="card-body">
                <img src={props.img} alt="project preview"></img>
            </div>
            <div className="card-footer">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;

//card has: 
//header = project name
//image = project preview
//content = project description
