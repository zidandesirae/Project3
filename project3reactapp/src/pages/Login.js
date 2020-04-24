import React from 'react';
import Outer from './../components/Login/Outer';
import LoginForm from './../components/Login/LoginForm';
import Footer from './../components/Footer';

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
