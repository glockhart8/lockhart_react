import React from "react";
import { FaInstagram, IconName } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="grid">
            <h3>
                <br></br>Email: lockhartgriffin@yahoo.com
            </h3>
            <h2>
                Powered by GRIFFIN LOCKHART
            </h2>
            <h3>
                <br></br> <a className="insta" href="https://www.instagram.com/griffinjl8/"><FaInstagram /></a>
            </h3>
        </footer>
    );
}

export default Footer;