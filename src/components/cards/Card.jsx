import React from "react";
import { Link } from "react-router-dom";
import './cards.css';

const Card = (props) => {

    const {imgSrc, link, details, id} = props;

    return (
        <Link to={link}>
            <a href={link}><img src={imgSrc} id={id} alt={details}/></a>
        </Link>
    );
}

export default Card;