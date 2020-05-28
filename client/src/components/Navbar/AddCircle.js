import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddCircle(props) {

    return (
        <div>
            <h4 className="pb-3">{props.title}</h4>
            <Row className="my-2">
                <Col sm={12}>
                    <h6>Looking to create a new circle or join an exising circle?</h6>
                </Col>
                <Col md={6} sm={12}>
                    <Link to="/addnew" type="button" className="btn btn-block my-2">Create a New Circle</Link>
                </Col>
                <Col md={6} sm={12}>
                    <Link to="addexisting" type="button" className="btn btn-block my-2">Join an Existing Circle</Link>
                </Col>
            </Row>
            <Row className="mt-4 mb-2">
                <Col sm={12}>
                    <h6>Already a member of another Circle?</h6>
                </Col>
                <Col md={6} sm={12}>
                    <Link to="/yourcircles" type="button" className="btn btn-block my-2">Switch Circle Page</Link>
                </Col>
            </Row>
        </div>
    );
}

export default AddCircle;