import aceu from "../photos/aceu_led.png";
import ace_small from "../photos/ace_small.png";
import bd from "../photos/between2doors_led.png";
import b2d_small from "../photos/b2d_small.png";

import '../css/gallery.css';

const PhotoDisplay = ({ setSelectedImg }) => {
    return (
        <div className="grid_photo">
            <div className="grid_item">
                <img src={ace_small} alt="led" onClick={() => setSelectedImg(aceu)}/>
            </div>
            <div className="grid_item">
                <img src={b2d_small} alt="led" onClick={() => setSelectedImg(bd)}/>
            </div>
        </div>
    )
}

export default PhotoDisplay;