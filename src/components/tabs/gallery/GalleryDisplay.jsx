import woodworking from "./photos/woodworking.png";
import photography from "./photos/photography.png";
import graphics from "./photos/graphics.png";

import {
    Link
  } from "react-router-dom";
import React from "react";


const GalleryDisplay = () => {
    return (
        <div className="category">
            <div className="category_img">
                <Link to="./photography">
                    <img src={photography} alt="cherry2"/>
                </Link>
            </div>
            <div className="category_img" >
                <Link to="./graphics">
                    <img src={graphics} alt="graphics"/>
                </Link>
            </div>
            <div className="category_img">
                <Link to="./woodworking">
                    <img src={woodworking} alt="cherry"/>
                </Link>
            </div>
        </div>
    )
}

export default GalleryDisplay;