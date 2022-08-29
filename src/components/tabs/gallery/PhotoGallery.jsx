import React from 'react';
import Averys_table from "./photos/Averys_table.JPEG";
import coltons_table from "./photos/coltons_table.JPEG";
import Darrens_desk from "./photos/Darrens_desk.JPG";
import my_desk from "./photos/my_desk.jpg";
import natalies_table from "./photos/Natalies_table.JPG";
import epoxy_coffee from "./photos/landing_image.png";
import './css/gallery.css';

const PhotoGallery = ({ setSelectedImg }) => {
    return (
        <div className="grid">
            <div className="grid_item">
                <img src={epoxy_coffee} alt="Epoxy" onClick={() => setSelectedImg(epoxy_coffee)}/>
            </div>
            <div className="grid_item">
                <img src={natalies_table} alt="Round" onClick={() => setSelectedImg(natalies_table)}/>
            </div>
            <div className="grid_item">
                <img src={coltons_table} alt="Coffee" onClick={() => setSelectedImg(coltons_table)}/>
            </div>
            <div className="grid_item">
                <img src={my_desk} alt="Desk" onClick={() => setSelectedImg(my_desk)}/>
            </div>
            <div className="grid_item">
                <img src={Averys_table} alt="Gray" onClick={() => setSelectedImg(Averys_table)}/>
            </div>
            <div className="grid_item">
                <img src={Darrens_desk} alt="Dark Table" onClick={() => setSelectedImg(Darrens_desk)}/>
            </div>
        </div>
    )
}

export default PhotoGallery;