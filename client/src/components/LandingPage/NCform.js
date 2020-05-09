import React from 'react';
import { Form, FormLabel, Row, Col } from 'react-bootstrap';

function NCform(props) {

    return (
        <Form onSubmit={e => props.onGroupSubmit(e)}>
            <FormLabel className="text-left h5 pt-4 pb-2">Create a New Circle: </FormLabel>
            <Row className="mx-auto">
                <Col sm={8}>
                    <input
                        value={props.group.name}
                        onChange={e => props.handleGroupInputChange(e)}
                        className="form-control form-control-lg mb-4"
                        name="name"
                        placeholder="Enter a Name here"
                    />
                </Col>
                <Col sm={4}>
                    <button type="submit" className="btn btn-lg mb-4">Create</button>
                </Col>
            </Row>
        </Form>
    );
}

export default NCform;