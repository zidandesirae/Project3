import React from 'react';
import Outer from './../../components/LoginSignUp/Outer';
import LoginForm from './../../components/LoginSignUp/LoginForm';
import Footer from './../Footer';

function Login(props) {
    return (
        <div>
            <Outer>
                <LoginForm />
            </Outer>
            <Footer />
        </div>
    );
}

export default Login;
