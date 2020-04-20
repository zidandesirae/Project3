import React from "react";

function NavBtn(props) {
    return (
        <a className="nav-item nav-link" href="#">{props.title}</a>
    );
}

export default NavBtn;