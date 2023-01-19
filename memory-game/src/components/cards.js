import React, {useEffect, useState} from "react";
import './cards.css';

const Card = (props) => {
    return (
        <div className='cardContainer' onClick={() => props.handleClick(props.character)}>
            <img src={props.character.image} height='150px'></img>
            <div>{props.character.name}</div>
        </div>
    )
}

export default Card;