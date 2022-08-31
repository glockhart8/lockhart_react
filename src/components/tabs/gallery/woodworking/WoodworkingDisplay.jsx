import React from 'react';
import '../css/gallery.css';

const WoodworkingDisplay = ({ setSelectedImg }) => {
    return (
        <div className="grid_photo">
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/landing_image_small.png"} alt="Epoxy" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/landing_image.png")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/natalies_table_small.png"} alt="Round" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/Natalies_table.JPG")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/coltons_small.png"} alt="Coffee" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/coltons_table.JPG")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/my_desk_small.png"} alt="Desk" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/my_desk.jpg")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/avery_table_small.png"} alt="Gray" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/Averys_table.png")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/darren_small.png"} alt="Dark Table" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/Darrens_desk.JPG")}/>
            </div>
        </div>
    )
}

export default WoodworkingDisplay;