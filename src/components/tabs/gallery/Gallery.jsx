import React from "react";
import epoxy from "./photos/epoxy.png"
import round from "./photos/round.png"
import coffee from "./photos/coffee.png"
import desk from "./photos/desk.png"
import gray from "./photos/gray_table.png"
import dark_table from "./photos/dark_table.png"

const Gallery = () => {
    return (
        <React.Fragment>
            <div className="grid">
                <div className="grid_item">
                    <img src={epoxy} alt="Epoxy"/>
                    <p>Steel River Cherry Coffee Table</p>
                </div>
                <div className="grid_item">
                    <img src={round} alt="Round"/>
                    <p>Round Dining Table</p>
                </div>
                <div className="grid_item">
                    <img src={coffee} alt="Coffee"/>
                    <p>Light Shou Sugi Ban Coffee Table</p>
                </div>
                <div className="grid_item">
                    <img src={desk} alt="Desk"/>
                    <p>Light Shou Sugi Ban Desk</p>
                </div>
                <div className="grid_item">
                    <img src={gray} alt="Gray"/>
                    <p>Grey Dining Table w/ Bench</p>
                </div>
                <div className="grid_item">
                    <img src={dark_table} alt="Dark Table"/>
                    <p>Dark Walnut* Desk</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Gallery;