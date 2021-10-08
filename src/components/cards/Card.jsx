import React from "react";

const Card = (props) => {

    const {imgSrc, link, details, id} = props;

    return (
            <a href={link}><img src={imgSrc} id={id} alt={details}/></a>
    );
}

export default Card;