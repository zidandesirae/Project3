import React from "react";
import { Link } from 'react-router-dom';
import TitleH1 from "../components/Universal/TitleH1";
import OurCircle from "../components/Images/OurCircleLogoMed.png";
import { Container, Row, Col, Image } from 'react-bootstrap';

function Landing(props) {
    return (
        <Container className="my-4 py-4">
            <Row>
                <Col md={8} className="mx-auto text-center">
                    <Image src={OurCircle} fluid />
                    <TitleH1 title="Our Circle" subtitle="Always in the Loop" />
                </Col>
                <Col md={5} className="mx-auto text-center">
                    <Link to="/newcircle" type="button" className="btn btn-lg btn-block mb-4">Create a New Circle</Link>
                    <Link to="/existingcircle" type="button" className="btn btn-lg btn-block mb-4">Join an Existing Circle</Link>
                    <Link to="/login" type="button" className="btn btn-lg btn-block mb-4">Login</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;

