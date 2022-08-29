import React from 'react';
import epoxy from "./photos/epoxy.png";
import round from "./photos/round.png";
import coffee from "./photos/coffee.png";
import desk from "./photos/desk.png";
import gray from "./photos/gray_table.png";
import dark_table from "./photos/dark_table.png";
import Averys_table from "./photos/Averys_table.JPEG";
import coltons_table from "./photos/coltons_table.JPEG";
import Darrens_desk from "./photos/Darrens_desk.JPG";
import my_desk from "./photos/my_desk.jpg";
import natalies_table from "./photos/Natalies_table.JPG";
import epoxy_coffee from "./photos/epoxy_coffee.png";
import './css/gallery.css';

const PhotoGallery = ({ setSelectedImg }) => {
    return (
        <div className="grid">
            <div className="grid_item">
                <img src={epoxy} alt="Epoxy" onClick={() => setSelectedImg(epoxy_coffee)}/>
                <p>Steel River Cherry Coffee Table</p>
            </div>
            <div className="grid_item">
                <img src={round} alt="Round" onClick={() => setSelectedImg(natalies_table)}/>
                <p>Round Dining Table</p>
            </div>
            <div className="grid_item">
                <img src={coffee} alt="Coffee" onClick={() => setSelectedImg(coltons_table)}/>
                <p>Light Shou Sugi Ban Coffee Table</p>
            </div>
            <div className="grid_item">
                <img src={desk} alt="Desk" onClick={() => setSelectedImg(my_desk)}/>
                <p>Light Shou Sugi Ban Desk</p>
            </div>
            <div className="grid_item">
                <img src={gray} alt="Gray" onClick={() => setSelectedImg(Averys_table)}/>
                <p>Grey Dining Table w/ Bench</p>
            </div>
            <div className="grid_item">
                <img src={dark_table} alt="Dark Table" onClick={() => setSelectedImg(Darrens_desk)}/>
                <p>Dark Walnut* Desk</p>
            </div>
        </div>
    )
}

export default PhotoGallery;