import React from "react";
import logo from "../../images/logo.png";
import { Container, Row, Col, Image } from 'react-bootstrap';

function LandingContainer(props) {
    return (
        <Container className="my-4 py-4">
            <Row>
                <Col md={8} className="mx-auto text-center">
                    <Image src={logo} className={props.className} fluid />
                    <div className="m-4">
                        <h1 className="text-3d">{props.title}</h1>
                        <h4>{props.subtitle}</h4>
                    </div>
                {props.children}
                </Col>
            </Row>
        </Container>
    );
}

export default LandingContainer;

