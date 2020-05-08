import React from 'react';
import { Form, FormLabel, Row, Col } from 'react-bootstrap';

function ECform(props) {
    return (
        <Form onSubmit={e => props.onGroupSubmit(e)}>
            <FormLabel className="text-left h5 pt-4 pb-2">Enter the Group ID of the Circle you would like to join:</FormLabel>
            <Row className="mx-auto">
                <Col sm={8}>
                    <input
                        value={props.group.id}
                        onChange={e => props.handleGroupInputChange(e)}
                        className="form-control form-control-lg mb-4"
                        name="id"
                    />
                </Col>
                <Col sm={4}>
                    <button type="submit" className="btn btn-lg mb-4">Search</button>
                </Col>
            </Row>
        </Form>
    );
}

export default ECform;