import React from "react";
import { Form } from 'react-bootstrap';

function LoginForm(props) {
    return (
        <Form onSubmit={e => props.onUserSubmit(e)}>
            <input
                className="form-control mt-2"
                name="email"
                placeholder="Email"
                value={props.user.email}
                onChange={e => props.handleUserInputChange(e)}
            />
            <input
                className="form-control my-4"
                name="password"
                placeholder="Password"
                value={props.user.password}
                onChange={e => props.handleUserInputChange(e)}
            />
            <button 
                type="submit" 
                className="btn btn-lg btn-block mb-4">
                    LOGIN
            </button>
        </Form>
    );
}

export default LoginForm;