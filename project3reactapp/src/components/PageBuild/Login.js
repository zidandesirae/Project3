//ADD on-click of "Create an account" to show <SignUp />

import React from 'react';
import Outer from './../../components/LoginSignUp/Outer';
import LoginForm from './../../components/LoginSignUp/LoginForm';

function Login(props) {
    return (
        <Outer>
            <LoginForm />
        </Outer>
    );
}

export default Login;