import aceu from "./photos/aceu_led.png";
import bd from "./photos/between2doors_led.png";

import '../photography/css/displayPhotos.css';

const PhotoDisplay = ({ setSelectedImg }) => {
    return (
        <div className="grid_photo">
            <div className="grid_item">
                <img src={aceu} alt="led" onClick={() => setSelectedImg(aceu)}/>
            </div>
            <div className="grid_item">
                <img src={bd} alt="led" onClick={() => setSelectedImg(bd)}/>
            </div>
        </div>
    )
}

export default PhotoDisplay;