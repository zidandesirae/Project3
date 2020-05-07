import React, { Component } from 'react';
import NavBar from '../components/NavItems/NavBar';
import ListsPage from '../components/Lists/ListsPage';
import './Lists.css';
import { Container, Row, Col } from 'react-bootstrap';

class Lists extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container className="pb-4">
                    <Row className="mx-auto">
                        <Col md={10} sm={12} className="mx-auto">
                            <h2 className="text-center mb-4 text-3d">Lists</h2>
                            <ListsPage />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Lists;