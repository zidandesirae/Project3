// Props for Title

import React from "react";

function NavTitle(props) {
    return (
        <a className="navbar-brand" href="#">{props.title}</a>
    );
}

export default NavTitle;