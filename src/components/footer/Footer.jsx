import React from "react";
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
                <br/> <a href="https://www.instagram.com/griffinjl8/"><i class="fab fa-instagram footer_icon"/></a>
                <a href="https://www.youtube.com/channel/UC1l1kwF9kCz3zzcswlKigRA"><i class="fab fa-youtube footer_icon"/></a>
                <a href="https://www.twitch.tv/kidgriffy"><i class="fab fa-twitch footer_icon"/></a>
            </h3>
        </footer>
    );
}

export default Footer;