import React, { useState } from 'react'
import API from '../../utils/API';

function NewSignUpForm() {
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({...prevUser, [name]: value}))
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(user);
        
        API.saveUser(user);
    
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
            <button type="submit" className="btn btn-lg btn-block mb-4">Create Account</button>
        </form>
    );
}

export default NewSignUpForm;