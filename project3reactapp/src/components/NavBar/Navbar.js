// Change TITLE

import React from "react";
import NavBtns from "./NavBtns";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-xs navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMarkup" aria-controls="navbarMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">TITLE</a>
            <div className="collapse navbar-collapse" id="navbarMarkup">
                <NavBtns />
            </div>
        </nav>
    );
}

export default NavBar;