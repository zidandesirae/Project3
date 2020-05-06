import React, { useState } from "react";
import API from '../../utils/API';

function SignUpForm() {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        birthday: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        setUserInput({
            name: this.target.name,
            email: this.target.email,
            password: this.target.password,
            phone: this.target.phone,
            birthday: this.target.birthday
        });
    }

    const handleChange = e => {
        setUserInput();
    }
    
    return (
        <form>
            <input className="form-control form-control-lg my-4" type="text" placeholder="Full Name" onChange={() => setUserInput({name: this.state.value, ...userInput}),  handleChange()}/>
            <input className="form-control form-control-lg my-4" type="text" placeholder="Email" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Create Password" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Phone Number" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Birthday" />
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
            <button type="button" className="btn btn-lg btn-block mb-4">Create Account</button>
        </form>
    );
}

export default SignUpForm;