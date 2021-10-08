import React from "react";
import { FaInstagram } from "react-icons/fa";
import './footer.css';

const Footer = () => {
    return (
        <footer className="grid">
            <h3>
                <br/>Email: lockhartgriffin@yahoo.com
            </h3>
            <h2>
                Powered by GRIFFIN LOCKHART
            </h2>
            <h3>
                <br/> <a className="insta" href="https://www.instagram.com/griffinjl8/"><FaInstagram /></a>
            </h3>
        </footer>
    );
}

export default Footer;