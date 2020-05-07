import React from "react";

function CheckBox(props) {
    return (
        <form>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck" checked disabled />
                <label className="form-check-label" for="exampleCheck"></label>
            </div>
Î        </form>
    );
}

export default CheckBox;