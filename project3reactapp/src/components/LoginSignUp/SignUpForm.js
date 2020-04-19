// **CHANGE** breakdown into smaller comonents
// Take user input (name, phone, email, password) and save user info
// Take user input (1)new group and create new group OR (2)group ID and match with existing group **This will need to add member info to group info page**
// On click 'Create Account' button => new or existing <Main />

import React from "react";

function SignUpForm(props) {
    return (
        <form>
            <input className="form-control form-control-lg mt-2" type="text" placeholder="First Name" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Last Name" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Phone Number (XXX-XXX-XXXX)" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Email" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Create Password" />
            <div className="row my-4">
                <div className="col">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                        <option>Select</option>
                        <option>Create New Group</option>
                        <option>Enter Existing Group ID</option>
                    </select>
                </div>
                <div className="col">
                    <input className="form-control form-control-lg" type="text" placeholder="" />
                </div>
            </div>
            <button type="button" className="btn btn-light btn-lg btn-block mb-4">Create Account</button>
        </form>
    );
}

export default SignUpForm;