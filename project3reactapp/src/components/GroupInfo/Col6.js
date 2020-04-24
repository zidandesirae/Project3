import React from "react";

function Col6(props) {
    return (
        <div className="col-md-6 col-sm-12">
            {props.children}
        </div>
    );
}

export default Col6;