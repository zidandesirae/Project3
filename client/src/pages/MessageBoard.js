import React from 'react';
import NavBar from '../components/NavItems/NavBar';
import Card1 from '../components/Universal/Card1';
import MessageBoardSetup from '../components/MessageBoard/MessageBoardSetup';
import Store from '../components/MessageBoard/Store';
import { Container, Row, Col } from 'react-bootstrap';

function MessageBoard() {
    return (
        <div>
            <NavBar />
            <Container className="pb-4">
                <Row className="mx-auto">
                    <Col md={10} sm={12} className="mx-auto">
                        <h2 className="text-center mb-4 text-3d">Message Board</h2>
                        <Card1>
                            <Store>
                                <MessageBoardSetup />
                            </Store>
                        </Card1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MessageBoard;