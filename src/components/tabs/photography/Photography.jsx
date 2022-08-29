import React, { useState } from "react";
import Modal from "./Modal";
import PhotoDisplay from "./PhotoDisplay";

const Photography = () => {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <React.Fragment>
            <PhotoDisplay setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </React.Fragment>
    );
}

export default Photography;