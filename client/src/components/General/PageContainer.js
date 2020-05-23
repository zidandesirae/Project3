import React from 'react';
import Card1 from './Card1';
import Navbar from '../Navbar/Navbar';
import { Container, Row, Col } from 'react-bootstrap';

function PageContainer(props) {
    return (
        <div>
            <Navbar />
            <Container className="pb-4">
                <Row className="mx-auto">
                    <Col md={10} sm={12} className="mx-auto">
                        <h2 className="text-center mb-4 text-3d">{props.title}</h2>
                        <Card1>
                            {props.children}
                        </Card1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageContainer;