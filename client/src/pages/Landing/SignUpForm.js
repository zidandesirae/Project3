import React from "react";
import LandingContainer from '../../components/Landing/LandingContainer';
import { Form, Col } from 'react-bootstrap';

function SignUpForm(props) {
    return (
        <LandingContainer
            title="Join Your Circle"
            subtitle="Create Your Personal Account"
            className="signUpLogo"
        >
            <Col md={7} className="mx-auto">
                <Form onSubmit={e => props.onUserSubmit(e)}>
                    <input
                        value={props.user.fullname}
                        onChange={e => props.handleUserInputChange(e)}
                        className="form-control mb-4"
                        name="fullname"
                        placeholder="Full Name"
                    />
                    <input
                        value={props.user.email}
                        onChange={e => props.handleUserInputChange(e)}
                        className="form-control my-4"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        value={props.user.password}
                        onChange={e => props.handleUserInputChange(e)}
                        className="form-control my-4"
                        name="password"
                        placeholder="Create Password (8-20 characters)"
                    />
                    <input
                        value={props.user.phone}
                        onChange={e => props.handleUserInputChange(e)}
                        className="form-control my-4"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (XXX-XXX-XXXX)"
                    />
                    <input
                        value={props.user.birthday}
                        onChange={e => props.handleUserInputChange(e)}
                        className="form-control my-4"
                        name="birthday"
                        placeholder="Birthday (MM/DD)"
                    />
                    <button
                        type="submit"
                        className="btn btn-lg btn-block mb-4"
                    >
                        Create Account
                    </button>
                </Form>
            </Col>
        </LandingContainer>
    );
}

export default SignUpForm;