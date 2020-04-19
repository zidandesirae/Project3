import React from "react";

function SetCol(props) {
    return (
        <div className="col-md-6 col-sm-12">
            {props.children}
        </div>
    );
}

export default SetCol;