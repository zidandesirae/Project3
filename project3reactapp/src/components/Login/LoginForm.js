// **POSSIBLE CHANGE** breakdown into smaller comonents

import React from "react";

function LoginForm(props) {
    return (
        <form>
            <input className="form-control form-control-lg mt-2" type="text" placeholder="Email" />
            <input className="form-control form-control-lg my-4" type="text" placeholder="Password" />
            <button type="button" className="btn btn-light btn-lg btn-block mb-4">LOGIN</button>
            <p>Not registered? <span> 
                <a href="#">Create an account</a></span>
            </p>
        </form>
    );
}

export default LoginForm;