import React from 'react';
import Card1 from '../Universal/Card1';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ListsPage() {
    return (
        <Card1>
            <Row>
                <Col sm={4} className="list-container">
                    <button type="button" className="btn">New List</button>
                    <Card>
                        <ul className="list-group"></ul>
                    </Card>
                </Col>
                <Col sm={8}>
                    <button type="button" className="btn mb-4">Save</button>
                    <input className="note-title h4" placeholder="List Title" maxLength="28" type="text" />
                    <textarea className="note-textarea" placeholder="List Text"></textarea>
                </Col>
            </Row>
        </Card1>
    );
}



export default ListsPage;