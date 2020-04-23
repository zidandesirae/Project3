//On click 'Edit' button => un-disables input field in UserSegment.js (affecting UserInput.js) and NotsSegment(affecting NotsInput.js)
//see src -> components -> Settings for above files

import React from "react";

function EditSaveBtn() {
    return (
        <div>
            <button type="button" className="btn btn-light">Edit</button>
            <button type="button" className="btn btn-light">Save Changes</button>
        </div>
    );
}

export default EditSaveBtn;