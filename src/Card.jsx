import React from "react";

const Card = (props) => {

    const {imgSrc, details, id} = props;

    return (
        <React.Fragment>
            <img src={imgSrc} id={id} alt={details}/>
            {/* <p className="cardDetails">{details}</p> */}
        </React.Fragment>
    );
}

export default Card;