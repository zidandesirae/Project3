// Home link => <Main />
// Settings link => <Settings />
// Group Info link => <GroupInfo />
// Log Out link => <Login />
// Edit title attribute

import React from "react";
import NavToggler from "./NavToggler";
import NavTitle from "./NavTitle";
import NavGroup from "./NavGroup";
import NavBtn from "./NavBtn";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-xs navbar-light bg-light">
            <NavToggler />
            <NavTitle title="INSERT"/>
            <NavGroup>
                <NavBtn />
            </NavGroup>
        </nav>
    );
}

export default NavBar;