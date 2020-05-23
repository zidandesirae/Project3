import React from "react";
import { Form } from 'react-bootstrap';

function SignUpForm(props) {
    return (
        <Form onSubmit={e => props.onNewUserSubmit(e)}>
            <input
                value={props.newUser.fullname}
                onChange={e => props.handleNewUserInputChange(e)}
                className="form-control my-4"
                name="fullname"
                placeholder="Full Name"
            />
            <input
                value={props.newUser.email}
                onChange={e => props.handleNewUserInputChange(e)}
                className="form-control my-4"
                name="email"
                placeholder="Email"
            />
            <input
                value={props.newUser.password}
                onChange={e => props.handleNewUserInputChange(e)}
                className="form-control my-4"
                name="password"
                placeholder="Create Password (8-20 characters)"
            />
            <input
                value={props.newUser.phone}
                onChange={e => props.handleNewUserInputChange(e)}
                className="form-control my-4"
                type="tel"
                name="phone"
                placeholder="Phone Number (XXX-XXX-XXXX)"
            />
            <input
                value={props.newUser.birthday}
                onChange={e => props.handleNewUserInputChange(e)}
                className="form-control my-4"
                name="birthday"
                placeholder="Birthday (MM/DD)"
            />
            <button 
                type="submit" 
                className="btn btn-lg btn-block mb-4"
            >
                Create Account
            </button>
        </Form>
    );
}

export default SignUpForm;