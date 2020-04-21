import React from 'react';
import Outer from './../components/SignUp/Outer';
import SignUpForm from './../components/SignUp/SignUpForm';
import Footer from './../components/Footer';

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