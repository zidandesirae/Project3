import React from 'react';
import LandingContainer from '../../components/Landing/LandingContainer';
import Card1 from '../../components/General/Card1';
import { Form, FormLabel, Row, Col } from 'react-bootstrap';

function ExistingCircle(props) {
    return (
        <LandingContainer
            title="Join Our Cicle"
            subtitle="It's Time to Get in the Loop"
            className="signUpLogo"
        >
            <Card1>
                <Form onSubmit={e => props.onGroupSubmit(e)}>
                    <FormLabel className="h5 pt-4 pb-2">Enter the Name and ID of the Circle you would like to join:</FormLabel>
                    <input
                        value={props.group.name}
                        onChange={e => props.handleGroupInputChange(e)}
                        className="form-control mb-4"
                        name="name"
                        placeholder="Circle Name"
                    />
                    <input
                        value={props.group.id}
                        onChange={e => props.handleGroupInputChange(e)}
                        className="form-control mb-4"
                        name="id"
                        placeholder="Circle ID"
                    />
                    <button
                        type="submit"
                        className="btn btn-lg btn-block mb-4">
                        Search
                    </button>
                </Form>
            </Card1>
        </LandingContainer>
    );
}

export default ExistingCircle;