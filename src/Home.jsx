import React from "react";
import Card from "./Card";
import river_close from "./photos/river_close_coffee_1_by_1.png"
import coasters from "./photos/coasters_stack.png"
import landing from "./photos/landing.png"

const cards = [
    {
        imgSrc: river_close,
        details: "these are the details",
        id: "1",
    },
    {
        imgSrc: coasters,
        details: "these are the other details",
        id: "2",
    },
    {
        imgSrc: landing,
        details: "these are the last details",
        id: "3",
    },
];

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <img className="landing_img" src={landing} alt="Landing"/>
            </div>
            <div className="card">
                {
                    cards.map(card => {
                        return <Card key={card.id} {...card}/>;
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default Home;