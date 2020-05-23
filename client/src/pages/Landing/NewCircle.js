import React from 'react';
import LandingContainer from '../../components/Landing/LandingContainer';
import Card1 from '../../components/General/Card1';
import { Form, FormLabel, Row, Col } from 'react-bootstrap';

function NewCircle(props) {
    return (
        <LandingContainer
            title="Join Our Cicle"
            subtitle="It's Time to Get in the Loop"
            className="signUpLogo"
        >
            <Card1 >
                <Form onSubmit={e => props.onGroupSubmit(e)}>
                    <FormLabel className="text-left h5 pt-4 pb-2">Create a New Circle by Entering the Desired Circle Name Below: </FormLabel>
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
                            <button
                                type="submit"
                                className="btn btn-lg btn-block mb-4">
                                Create
                        </button>
                        </Col>
                    </Row>
                </Form>
            </Card1>
        </LandingContainer>
    );
}

export default NewCircle;