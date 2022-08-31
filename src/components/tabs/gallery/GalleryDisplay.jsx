import { Link } from "react-router-dom";
import React from "react";


const GalleryDisplay = () => {
    return (
        <div className="category">
            <div className="category_img">
                <Link to="./photography">
                    <img src={process.env.PUBLIC_URL + "/images/photography.png"} alt="cherry2"/>
                </Link>
            </div>
            <div className="category_img" >
                <Link to="./graphics">
                    <img src={process.env.PUBLIC_URL + "/images/graphics.png"} alt="graphics"/>
                </Link>
            </div>
            <div className="category_img">
                <Link to="./woodworking">
                    <img src={process.env.PUBLIC_URL + "/images/woodworking.png"} alt="cherry"/>
                </Link>
            </div>
        </div>
    )
}

export default GalleryDisplay;