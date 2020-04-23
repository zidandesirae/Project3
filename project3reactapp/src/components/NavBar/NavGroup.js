import React from "react";

function NavGroup(props) {
    return (
            <div className="collapse navbar-collapse" id="navbarMarkup">
                <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {props.children}
                </div>
            </div>
    );
}

export default NavGroup;