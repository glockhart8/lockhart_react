import React, { useState } from "react";
import Modal from "../Modal";
import PhotoGallery from "./WoodworkingDisplay";

const Woodworking = () => {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <React.Fragment>
            <PhotoGallery setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </React.Fragment>
    );
}

export default Woodworking;