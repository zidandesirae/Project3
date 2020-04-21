import React from "react";

function Container1(props) {
    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Container1;