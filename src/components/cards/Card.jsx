import React from "react";
import './cards.css';

const Card = (props) => {

    const {imgSrc, link, details, id} = props;

    return (
            <a href={link}><img src={imgSrc} id={id} alt={details}/></a>
    );
}

export default Card;