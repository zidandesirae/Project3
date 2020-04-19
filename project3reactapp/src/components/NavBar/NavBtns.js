// **POSSIBLE CHANGE** breakdown into smaller comonents - separate each nav-item
// Home link => <Main />
// Settings link => <Settings />
// Group Info link => <GroupInfo />
// Log Out link => <Login />

import React from "react";

function NavBtns(props) {
    return (
        <div className="navbar-nav mr-auto mt-2 mt-lg-0">
            <a className="nav-item nav-link" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Settings</a>
            <a className="nav-item nav-link" href="#">Group Information</a>
            <a className="nav-item nav-link" href="#">Log Out</a>
        </div>
    );
}

export default NavBtns;