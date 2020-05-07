import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import API from '../../utils/API';

function LoginForm(props) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({...prevUser, [name]: value}))
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(user);

    };

    return (
        <form onSubmit={e => onSubmit(e)}>
            <input 
                className="form-control form-control-lg mt-2" 
                name="email" 
                placeholder="Email" 
                value={user.email}
                onChange={e => handleInputChange(e)} 
            />
            <input 
                className="form-control form-control-lg my-4" 
                name="password" 
                placeholder="Password" 
                value={user.password}
                onChange={e => handleInputChange(e)}
            />
            <Link to="/home" type="submit" className="btn btn-lg btn-block mb-4">LOGIN</Link>
        </form>
    );
}

export default LoginForm;