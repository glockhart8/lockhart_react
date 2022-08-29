import React from "react";
import landing from "./photos/Mirror.png";
import ImageSlider from "../../slider/ImageSlider";
import './home.css';

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <img className="landing_img" src={landing} alt="Landing"/>
            </div>
            <div className="card">
                <ImageSlider />
            </div>
        </React.Fragment>
    );
}

export default Home;