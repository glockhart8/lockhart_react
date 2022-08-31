import '../css/gallery.css';
// import { isPropertyAccessChain } from "typescript";

const PhotoDisplay = ({ setSelectedImg }) => {
    return (
        <div className="grid_photo">

            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/shiloh_small.png"} alt="dog" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/shiloh.png")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/boats_small.png"} alt="boats" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/boats_2.png")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/canon_small.png"} alt="camera" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/canon_small.png")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/dash_small.png"} alt="dash" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/dash.png")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/white_bmw_small.png"} alt="bmw" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/white_bmw.png")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/lincoln_small.png"} alt="lincoln_rock" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/lincoln.png")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/ryan_small.png"} alt="ryan" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/ryan.png")}/>
            </div>
        </div>
    )
}

export default PhotoDisplay;