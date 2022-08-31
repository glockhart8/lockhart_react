import React from "react";
import ImageSlider from "../../slider/ImageSlider";
import './home.css';

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <img className="landing_img" src={process.env.PUBLIC_URL + "/images/Mirror.png"} alt="Landing"/>
            </div>
            <div className="card">
                <ImageSlider />
            </div>
        </React.Fragment>
    );
}

export default Home;