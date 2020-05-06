import React from 'react';
import SignUpPage from '../components/SignUp/SignUpPage';
// import SignUpForm from '../components/SignUp/SignUpForm';
import NewSignUpForm from '../components/SignUp/NewSignUpForm';

function SignUp(props) {
    return (
        <SignUpPage>
            {/* <SignUpForm /> */}
            <NewSignUpForm />
        </SignUpPage>
    );
}

export default SignUp;