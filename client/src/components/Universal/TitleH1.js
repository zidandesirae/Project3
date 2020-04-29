import React from "react";

function TitleH1(props) {
    return (
        <div className="m-4">
            <h1 className="text-3d" >{props.title}</h1>
            <h4>{props.subtitle}</h4>
        </div>
    );
}

export default TitleH1;