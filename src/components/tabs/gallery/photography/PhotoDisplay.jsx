import shiloh from "../photos/shiloh.png";
import shiloh_small from "../photos/shiloh_small.png";
import boats from "../photos/boats_2.png";
import boats_small from "../photos/boats_small.png";
import canon from "../photos/canon_fireball.png";
import canon_small from "../photos/canon_small.png";
import dash from "../photos/dash.png";
import dash_small from "../photos/dash_small.png";
import ryan from "../photos/ryan.png";
import ryan_small from "../photos/ryan_small.png";
import bmw from "../photos/white_bmw.png";
import bmw_small from "../photos/white_bmw_small.png";
import lincoln from "../photos/lincoln.png";
import lincoln_small from "../photos/lincoln_small.png";
import '../css/gallery.css';

const PhotoDisplay = ({ setSelectedImg }) => {
    return (
        <div className="grid_photo">

            <div className="grid_item">
                <img src={shiloh_small} alt="dog" onClick={() => setSelectedImg(shiloh)}/>
            </div>
            <div className="grid_item">
                <img src={boats_small} alt="boats" onClick={() => setSelectedImg(boats)}/>
            </div>
            <div className="grid_item">
                <img src={canon_small} alt="camera" onClick={() => setSelectedImg(canon)}/>
            </div>
            <div className="grid_item">
                <img src={dash_small} alt="dash" onClick={() => setSelectedImg(dash)}/>
            </div>
            <div className="grid_item">
                <img src={bmw_small} alt="bmw" onClick={() => setSelectedImg(bmw)}/>
            </div>
            <div className="grid_item">
                <img src={lincoln_small} alt="lincoln_rock" onClick={() => setSelectedImg(lincoln)}/>
            </div>
            <div className="grid_item">
                <img src={ryan_small} alt="ryan" onClick={() => setSelectedImg(ryan)}/>
            </div>
        </div>
    )
}

export default PhotoDisplay;