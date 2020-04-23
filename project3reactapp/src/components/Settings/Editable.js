//when edited and saved, input box will have to become un-disabled, saved and then re-disabled

import React from "react";

function Editable(props) {
    return (
        <form>
            <input className="form-control" type="text" placeholder="INSERT props for placeholder" disabled />
        </form>
    );
}

export default Editable;