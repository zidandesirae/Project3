import React from 'react';
import LoginPage from '../components/Login/LoginPage';
// import LoginForm from '../components/Login/LoginForm';
import NewLoginForm from '../components/Login/NewLoginForm';

function Login(props) {
    return (
        <LoginPage>
            {/* <LoginForm /> */}
            <NewLoginForm />
        </LoginPage>
    );
}

export default Login;
