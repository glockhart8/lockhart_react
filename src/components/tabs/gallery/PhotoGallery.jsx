import React from 'react';
import epoxy from "./photos/epoxy.png";
import round from "./photos/round.png";
import coffee from "./photos/coffee.png";
import desk from "./photos/desk.png";
import gray from "./photos/gray_table.png";
import dark_table from "./photos/dark_table.png";
import './css/gallery.css';

const PhotoGallery = ({ setSelectedImg }) => {
    return (
        <div className="grid">
            <div className="grid_item">
                <img src={epoxy} alt="Epoxy" onClick={() => setSelectedImg(epoxy)}/>
                <p>Steel River Cherry Coffee Table</p>
            </div>
            <div className="grid_item">
                <img src={round} alt="Round" onClick={() => setSelectedImg(round)}/>
                <p>Round Dining Table</p>
            </div>
            <div className="grid_item">
                <img src={coffee} alt="Coffee" onClick={() => setSelectedImg(coffee)}/>
                <p>Light Shou Sugi Ban Coffee Table</p>
            </div>
            <div className="grid_item">
                <img src={desk} alt="Desk" onClick={() => setSelectedImg(desk)}/>
                <p>Light Shou Sugi Ban Desk</p>
            </div>
            <div className="grid_item">
                <img src={gray} alt="Gray" onClick={() => setSelectedImg(gray)}/>
                <p>Grey Dining Table w/ Bench</p>
            </div>
            <div className="grid_item">
                <img src={dark_table} alt="Dark Table" onClick={() => setSelectedImg(dark_table)}/>
                <p>Dark Walnut* Desk</p>
            </div>
        </div>
    )
}

export default PhotoGallery;