import React from "react";
import { FaInstagram, FaYoutube, FaTwitch } from "react-icons/fa";
import './footer.css';

const Footer = () => {
    return (
        <footer className="grid_footer">
            <h3>
                <br/> {/*Empty Grid placeholder */}
            </h3>
            <h2>
                Powered by GRIFFIN LOCKHART
            </h2>
            <h3>
                <br/> <a className="insta" href="https://www.instagram.com/griffinjl8/"><FaInstagram /></a>
                <a className="insta" href="https://www.youtube.com/channel/UC1l1kwF9kCz3zzcswlKigRA"><FaYoutube /></a>
                <a className="insta" href="https://www.twitch.tv/kidgriffy"><FaTwitch /></a>
            </h3>
        </footer>
    );
}

export default Footer;