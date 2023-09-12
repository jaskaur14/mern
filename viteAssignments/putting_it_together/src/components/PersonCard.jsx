import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ age, setInAge ] = useState(props.initialAge);
    return(
        <div>
            <h2>{props.lastName }, {props.firstName }</h2>
            <p>Age: { age }</p>
            <button onClick={ (event) => setInAge(age + 1)}>Birthday button for { props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;