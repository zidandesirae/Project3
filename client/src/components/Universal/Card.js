import React from "react";

function Card(props) {
    return (
        <div className="card showdow-lg">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default Card;