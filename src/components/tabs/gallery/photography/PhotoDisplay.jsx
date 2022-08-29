import shiloh from"../photos/blue_eyed_shepherd.png";
import boats from "../photos/boats_2.png";
import canon from "../photos/canon_fireball.png";
import dash from "../photos/dash.png";
import ryan from "../photos/natureBack.png";
import bmw from "../photos/white_bmw.png";
import lincoln from "../photos/lincoln.png";
import '../css/gallery.css';

const PhotoDisplay = ({ setSelectedImg }) => {
    return (
        <div className="grid_photo">

            <div className="grid_item">
                <img src={shiloh} alt="dog" onClick={() => setSelectedImg(shiloh)}/>
            </div>
            <div className="grid_item">
                <img src={boats} alt="boats" onClick={() => setSelectedImg(boats)}/>
            </div>
            <div className="grid_item">
                <img src={canon} alt="camera" onClick={() => setSelectedImg(canon)}/>
            </div>
            <div className="grid_item">
                <img src={dash} alt="dash" onClick={() => setSelectedImg(dash)}/>
            </div>
            <div className="grid_item">
                <img src={bmw} alt="bmw" onClick={() => setSelectedImg(bmw)}/>
            </div>
            <div className="grid_item">
                <img src={lincoln} alt="lincoln_rock" onClick={() => setSelectedImg(lincoln)}/>
            </div>
            <div className="grid_item">
                <img src={ryan} alt="ryan" onClick={() => setSelectedImg(ryan)}/>
            </div>
        </div>
    )
}

export default PhotoDisplay;