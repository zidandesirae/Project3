import React from 'react';
import Outer from './../../components/LoginSignUp/Outer';
import SignUpForm from './../../components/LoginSignUp/SignUpForm';
import Footer from './../Footer';

function SignUp(props) {
    return (
        <div>
            <Outer>
                <SignUpForm />
            </Outer>
            <Footer />
        </div>
    );
}

export default SignUp;