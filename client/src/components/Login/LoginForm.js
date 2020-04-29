import React from "react";
import { Link } from 'react-router-dom';

function LoginForm(props) {
    return (
        <form>
            <input className="form-control form-control-lg mt-2" type="text" placeholder="Email" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Password" />
            {/* NEEDS TO BE CHANGED BACK TO BUTTON TAG- Link tag only for viewing purposes right now  */}
            <Link to="/home" type="button" className="btn btn-lg btn-block mb-4">LOGIN</Link>
            <p>Not registered?
                <span>
                <Link to="/signup" className="signupLink"> Create an account! </Link></span>
            </p>
        </form>
    );
}

export default LoginForm;