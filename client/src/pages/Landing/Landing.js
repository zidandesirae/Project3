import React from "react";
import LandingContainer from '../../components/Landing/LandingContainer';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

function Landing(props) {
    return (
        <LandingContainer 
            title="Our Circle" 
            subtitle="Always in the Loop" 
            className="signUpLogo"
        >
            <Col md={7} className="mx-auto text-center">
                <Link 
                    to="/signup" 
                    type="button" 
                    className="btn btn-lg btn-block mb-4"
                >
                    Join Our Circle
                </Link>
                <Link 
                    to="/login" 
                    type="button" 
                    className="btn btn-lg btn-block mb-4"
                >
                    Login
                </Link>
            </Col>
        </LandingContainer>
    );
}

export default Landing;