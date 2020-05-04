import React from "react";

function Card(props) {
    return (
        <div className="card card1">
            <div className="card-body card-body1">
                {props.children}
            </div>
        </div>
    );
}

export default Card;