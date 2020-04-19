//ADD on-click of "Create an account" to show <SignUp />

import React from 'react';
import Outer from './../Outer';
import LoginForm from './../LoginForm';

function Login(props) {
    return (
        <Outer>
            <LoginForm />
        </Outer>
    );
}

export default Login;