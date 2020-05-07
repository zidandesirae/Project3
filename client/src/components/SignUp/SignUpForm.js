import React, { useState } from 'react'
import API from '../../utils/API';

function SignUpForm() {
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        groupType: "start",
        typeInput: ""
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({...prevUser, [name]: value}))
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(e);
        // Data gets saved to Users Table
        API.saveUser(user)
            .then((data) => {
                console.log(data);
                const numbers = /^[0-9]+$/;
                // Checks to see if user input is a number
                if ((data.typeInput).match(numbers)) {
                    return console.log("Existing group");
                } else {
                    // Data (group name) gets saved to Groups Table
                    API.saveGroup({ name: data.typeInput })
                    // Checks to see if user inputs 'new group name'
                    return console.log("Create a new group");
                }
            })
    };

    return (
        <form onSubmit={e => onSubmit(e)}>
            <input
                value={user.fullname}
                onChange={e => handleInputChange(e)}
                className="form-control form-control-lg my-4"
                name="fullname"
                placeholder="Full Name"
            />
            <input
                value={user.email}
                onChange={e => handleInputChange(e)}
                className="form-control form-control-lg my-4"
                name="email"
                placeholder="Email"
            />
            <input
                value={user.password}
                onChange={e => handleInputChange(e)}
                className="form-control form-control-lg my-4"
                name="password"
                placeholder="Create Password (8-20 characters)"
            />
            <input
                value={user.phone}
                onChange={e => handleInputChange(e)}
                className="form-control form-control-lg my-4"
                type="tel"
                name="phone"
                placeholder="Phone Number (XXX-XXX-XXXX)"
            />
            <input
                value={user.birthday}
                onChange={e => handleInputChange(e)}
                className="form-control form-control-lg my-4"
                name="birthday"
                placeholder="Birthday (MM/DD)"
            />
            <div className="row my-4">
                <div className="col">
                    <select className="form-control form-control-lg" name="groupType" value={user.groupType} onChange={e => handleInputChange(e)}>
                        <option value="start">Select</option>
                        <option value="new">Create New Group</option>
                        <option value="groupID">Enter Existing Group ID</option>
                    </select>
                </div>
                <div className="col">
                    <input
                        className="form-control form-control-lg"
                        name="typeInput"
                        value={user.typeInput}
                        onChange={e => handleInputChange(e)}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-lg btn-block mb-4">Create Account</button>
        </form>
    );
}

export default SignUpForm;