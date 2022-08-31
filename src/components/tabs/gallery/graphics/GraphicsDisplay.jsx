import '../css/gallery.css';

const PhotoDisplay = ({ setSelectedImg }) => {
    return (
        <div className="grid_photo">
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/aceu_led_small.png"} alt="led" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/aceu_led.png")}/>
            </div>
            <div className="grid_item">
                <img src={process.env.PUBLIC_URL + "/images/b2d_small.png"} alt="led" onClick={() => setSelectedImg(process.env.PUBLIC_URL + "/images/between2doors_led.png")}/>
            </div>
        </div>
    )
}

export default PhotoDisplay;