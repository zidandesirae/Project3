import React from "react";
import { Link } from 'react-router-dom';
import LandingContainer from '../../components/Landing/LandingContainer';
import { Col } from 'react-bootstrap';

function SignUp(props) {
    return (
        <LandingContainer
            title="Join Our Circle"
            subtitle="It's Time to Get in the Loop"
            className="signUpLogo"
        >
            <Col md={6} sm={10} className="mx-auto text-center">
                <Link
                    to="/newcircle"
                    type="button"
                    className="btn btn-lg btn-block mb-4"
                >
                    Create New Circle
                </Link>
                <Link
                    to="existingcircle"
                    type="button"
                    className="btn btn-lg btn-block mb-4"
                >
                    Join Existing Circle
                </Link>
            </Col>
        </LandingContainer>
    );
}

export default SignUp;


