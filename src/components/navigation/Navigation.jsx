import React, { useState } from "react";
import banner_pic from './photos/LOCKHART.png';
import CoffeeTables from "../cards/CoffeeTables";
import Coasters from "../cards/Coasters";
import Desks from "../cards/Desks";
import Tables from "../cards/Tables";
import './css/navigation.css';

import Home from '../tabs/home/Home';
import Gallery from '../tabs/gallery/Gallery';
import Graphics from '../tabs/gallery/graphics/Graphics';
import Photography from '../tabs/gallery/photography/Photography';
import Woodworking from '../tabs/gallery/woodworking/Woodworking';
import Contact from '../tabs/Contact';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { FaHamburger, FaTimes } from "react-icons/fa";


const Navigation = () => {
	// Creating a state for the link 
	const [click, setClick] = useState(false);
	const [homeLink, setHomeLinkActive] = useState(true);
	const [galleryLink, setWoodworkingLinkActive] = useState(false);
	const [contactLink, setContactLinkActive] = useState(false);

	// Handles the burger menu animation
	const handleBurgerClick = () => {
		setClick(!click);

		// Burger Animation
		const burger = document.querySelector('.burger');
		burger.classList.toggle('toggleBurger');
	}

	// Toggling the links based on which is active
	const toggleNavActive = (param) => {
		setClick(false);
		switch(param) {
			case 1:
				setHomeLinkActive(true);
				setWoodworkingLinkActive(false);
				setContactLinkActive(false);	
			break;
			case 2:
				setHomeLinkActive(false);
				setWoodworkingLinkActive(true);
				setContactLinkActive(false);
			break;
			case 3:
				setHomeLinkActive(false);
				setWoodworkingLinkActive(false);
				setContactLinkActive(true);
			break;
			default:
				setHomeLinkActive(false);
				setWoodworkingLinkActive(false);
				setContactLinkActive(false);
		}
	}

    return (
        <React.Fragment>

				<nav className="navbar" id="header">
					<div className="navbar-container">
						<Link to="/" id="navbar_logo" title="Home">
							<img className="banner_logo" src={banner_pic} alt="LOCKHART" />
						</Link>
						<div onClick={handleBurgerClick} className="burger"> 
							<div className="line1"></div>
							<div className="line2"></div>
							<div className="line3"></div>
						</div>
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<li className="nav-item">
								<Link to='/' className={homeLink ? "nav-links active" : "nav-links"} onClick={() => toggleNavActive(1)}>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to='/gallery' className={galleryLink ? "nav-links active" : "nav-links"} onClick={() => toggleNavActive(2)}>
									Gallery
								</Link>
							</li>
							<li className="nav-item">
								<Link to='/contact' className={contactLink ? "nav-links active" : "nav-links"} onClick={() => toggleNavActive(3)}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				<Switch>
					<Route path="/gallery">
						<Gallery />
					</Route>
					<Route path="/photography">
						<Photography />
					</Route>
					<Route path="/graphics">
						<Graphics />
					</Route>
					<Route path="/woodworking">
						<Woodworking />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/coffee-tables">
						<CoffeeTables />
					</Route>
					<Route path="/coasters">
						<Coasters />
					</Route>
					<Route path="/desks">
						<Desks />
					</Route>
					<Route path="/tables">
						<Tables />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
        </React.Fragment>
    );
}

export default Navigation;