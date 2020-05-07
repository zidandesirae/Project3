import React from "react";

function Container2(props) {
    return (
        <div className="container pb-4">
            <div className="row mx-auto">
                {props.children}
            </div>
        </div>
    );
}

export default Container2;
