import React from "react";

function TitleH1(props) {
    return (
        <div className="my-4">
            <h1 className="display-2 text-3d" >{props.title}</h1>
            <h4>{props.subtitle}</h4>
        </div>
    );
}

export default TitleH1;