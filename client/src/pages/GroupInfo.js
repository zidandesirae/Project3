import React from 'react';
import Card1 from '../components/Universal/Card1';
import GroupSegment from '../components/NavItems/GroupSegment';
import MemberSegment from '../components/NavItems/MemberSegment';
import NavBar from '../components/NavItems/NavBar';
import { Container, Col, Row } from 'react-bootstrap';

function GroupInfo(props) {

    return (
        <div>
            <NavBar />
            <Container className="pb-4">
                <Row className="mx-auto">
                    <Col md={10} sm={12} className="mx-auto">
                        <h2 className="text-center mb-4 text-3d">Group Information</h2>
                        <Card1>
                            <GroupSegment />
                            <MemberSegment />
                        </Card1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default GroupInfo;