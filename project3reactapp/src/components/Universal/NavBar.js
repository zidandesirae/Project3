import React from "react";
import NavBtns from "./NavBtns";
import OurCircle from "../Images/OurCircleLogoMed.png";

const appLogo = <img src={OurCircle} className="logo" alt="image1"/>
;

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-xs navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMarkup" aria-controls="navbarMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/home">{appLogo}</a>
            <div className="collapse navbar-collapse" id="navbarMarkup">
                <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <NavBtns />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;