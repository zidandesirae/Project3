import React from 'react';
import Card1 from '../components/Universal/Card1';
import UserSegment from '../components/NavItems/UserSegment';
import NavBar from '../components/NavItems/NavBar';
import { Container, Row, Col } from 'react-bootstrap';

function Settings(props) {


    return (
        <div>
            <NavBar />
            <Container className="pb-4">
                <Row className="mx-auto">
                    <Col md={10} sm={12} className="mx-auto">
                        <h2 className="text-center mb-4 text-3d">Group Information</h2>
                        <Card1>
                            <h4 className="pb-4">Personal Information</h4>
                            <UserSegment />
                        </Card1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Settings;