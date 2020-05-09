import React from "react";
import { Link } from 'react-router-dom';
import OurCircle from "../components/Images/OurCircleLogoMed.png";
import { Container, Row, Col, Image } from 'react-bootstrap';

function Landing(props) {
    return (
        <Container className="my-4 py-4">
            <Row>
                <Col md={8} className="mx-auto text-center">
                    <Image src={OurCircle} fluid />
                    <div className="m-4">
                        <h1 className="text-3d">Our Circle</h1>
                        <h4>Always in the Loop</h4>
                    </div>
                </Col>
                <Col md={5} className="mx-auto text-center">
                    <Link to="/newcircle" type="button" className="btn btn-lg btn-block mb-4">Create a New Circle</Link>
                    <Link to="/existingcircle" type="button" className="btn btn-lg btn-block mb-4">Enter a Circle Code or Login</Link>
                    {/* <Link to="/login" type="button" className="btn btn-lg btn-block mb-4">Login</Link> */}
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;

