import React, { useState } from "react";
import Modal from "../Modal";
import GraphicsDisplay from "./GraphicsDisplay.jsx";

const Graphics = () => {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <React.Fragment>
            <GraphicsDisplay setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </React.Fragment>
    );
}

export default Graphics;