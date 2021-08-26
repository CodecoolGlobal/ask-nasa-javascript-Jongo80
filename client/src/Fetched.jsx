import React from 'react'

const Fetched = (props) => {
    return (
        <div>
            <h3>{props.photo.title}</h3>
            <img src={props.photo.url} alt={props.photo.title} />
            <p>Explaination: {props.photo.explanation}</p>
        </div>
    )
}

export default Fetched
