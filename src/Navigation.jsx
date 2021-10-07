import React, { useState } from "react";
import banner_pic from './photos/LOCKHART.png';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navigation = () => {

	// Creating a state for the link 
	const [homeLink, setHomeLinkActive] = useState(true);
	const [galleryLink, setGalleryLinkActive] = useState(false);
	const [contactLink, setContactLinkActive] = useState(false);

	// Toggling the links based on which is active
	const toggleNavActive = (param) => {
		switch(param) {
			case 1:
				setHomeLinkActive(true);
				setGalleryLinkActive(false);
				setContactLinkActive(false);	
			break;
			case 2:
				setHomeLinkActive(false);
				setGalleryLinkActive(true);
				setContactLinkActive(false);
			break;
			case 3:
				setHomeLinkActive(false);
				setGalleryLinkActive(false);
				setContactLinkActive(true);
			break;
			default:
				setHomeLinkActive(false);
				setGalleryLinkActive(false);
				setContactLinkActive(false);
		}
	}

    return (
        <React.Fragment>
                <div className="burger">
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
				<div id="header">
					<a href="index.html" id="main_logo" title="Home">
						<img className="banner_logo" src={banner_pic} alt="LOCKHART" />
					</a>
				</div>
				<nav>
					<ul className="nav-links">
						<li className="first"><Link className={homeLink ? "active" : ""} onClick={() => toggleNavActive(1)}  id="home" to="./">HOME</Link></li>
						<li className="notfirst"><Link className={galleryLink ? "active" : ""} onClick={() => toggleNavActive(2)} id="gallery" to="./gallery">GALLERY</Link></li>
						<li className="notfirst"><Link className={contactLink ? "active" : ""} onClick={() => toggleNavActive(3)} id="contact" to="./contact">CONTACT</Link></li>
					</ul>
				</nav>
				<Switch>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/gallery">
						<Gallery />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
        </React.Fragment>
    );
}

export default Navigation;