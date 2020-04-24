import React from "react";

function TitleH1(props) {
    return (
        <div className="mb-4">
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
        </div>
    );
}

export default TitleH1;