//LINK needs to be added for each corresponding segment (calendar, dashboard, lists, photo album)

import React from "react";

function Link(props) {
    return (
        <a href="">{props.children}</a>
    );
}

export default Link;