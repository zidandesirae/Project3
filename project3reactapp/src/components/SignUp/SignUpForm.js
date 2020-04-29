import React from "react";

function SignUpForm(props) {
    return (
        <form>
            <input className="form-control form-control-lg my-4" type="text" placeholder="Full Name" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Email" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Create Password" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Phone Number (XXX-XXX-XXXX)" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Birthday (MM/DD)" />
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