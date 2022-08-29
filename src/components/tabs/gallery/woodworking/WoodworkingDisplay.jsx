import React from 'react';
import Averys_table from "../photos/Averys_table.JPEG";
import avery_table_small from "../photos/avery_table_small.png";
import coltons_table from "../photos/coltons_table.JPEG";
import coltons_table_small from "../photos/coltons_small.png";
import Darrens_desk from "../photos/Darrens_desk.JPG";
import darrens_desk_small from "../photos/darren_small.png";
import my_desk from "../photos/my_desk.jpg";
import my_desk_small from "../photos/my_desk_small.png";
import natalies_table from "../photos/Natalies_table.JPG";
import natalies_table_small from "../photos/natalies_table_small.png";
import epoxy_coffee from "../photos/landing_image.png";
import epoxy_coffee_small from "../photos/landing_image_small.png";
import '../css/gallery.css';

const WoodworkingDisplay = ({ setSelectedImg }) => {
    return (
        <div className="grid_photo">
            <div className="grid_item">
                <img src={epoxy_coffee_small} alt="Epoxy" onClick={() => setSelectedImg(epoxy_coffee)}/>
            </div>
            <div className="grid_item">
                <img src={natalies_table_small} alt="Round" onClick={() => setSelectedImg(natalies_table)}/>
            </div>
            <div className="grid_item">
                <img src={coltons_table_small} alt="Coffee" onClick={() => setSelectedImg(coltons_table)}/>
            </div>
            <div className="grid_item">
                <img src={my_desk_small} alt="Desk" onClick={() => setSelectedImg(my_desk)}/>
            </div>
            <div className="grid_item">
                <img src={avery_table_small} alt="Gray" onClick={() => setSelectedImg(Averys_table)}/>
            </div>
            <div className="grid_item">
                <img src={darrens_desk_small} alt="Dark Table" onClick={() => setSelectedImg(Darrens_desk)}/>
            </div>
        </div>
    )
}

export default WoodworkingDisplay;