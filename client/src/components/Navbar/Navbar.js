import React from "react";
import { Link } from 'react-router-dom';
import NavLinks from "./NavLinks";
import logo from '../../images/logo.png';
import { Image } from 'react-bootstrap';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-xs navbar-light">
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarMarkup" 
                aria-controls="navbarMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/home" className="navbar-brand mr-0">
                <Image src={logo} className="logo" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarMarkup">
                <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;