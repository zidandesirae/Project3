import React from 'react';
import OurCircle from "../Images/OurCircleLogoMed.png";
import Card1 from '../Universal/Card1';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';

function SignUp(props) {
    return (
        <Container className="my-4 py-4">
            <Row>
                <Col md={8} className="mx-auto text-center">
                    <Image src={OurCircle} className="signUpLogo" fluid />
                    <div className="m-4">
                        <h1 className="text-3d">Our Circle</h1>
                        <h4>Always in the Loop</h4>
                    </div>
                    <Card1>
                        <Form onSubmit={e => props.onNewUserSubmit(e)}>
                            <input
                                value={props.newUser.fullname}
                                onChange={e => props.handleNewUserInputChange(e)}
                                className="form-control form-control-lg my-4"
                                name="fullname"
                                placeholder="Full Name"
                            />
                            <input
                                value={props.newUser.email}
                                onChange={e => props.handleNewUserInputChange(e)}
                                className="form-control form-control-lg my-4"
                                name="email"
                                placeholder="Email"
                            />
                            <input
                                value={props.newUser.password}
                                onChange={e => props.handleNewUserInputChange(e)}
                                className="form-control form-control-lg my-4"
                                name="password"
                                placeholder="Create Password (8-20 characters)"
                            />
                            <input
                                value={props.newUser.phone}
                                onChange={e => props.handleNewUserInputChange(e)}
                                className="form-control form-control-lg my-4"
                                type="tel"
                                name="phone"
                                placeholder="Phone Number (XXX-XXX-XXXX)"
                            />
                            <input
                                value={props.newUser.birthday}
                                onChange={e => props.handleNewUserInputChange(e)}
                                className="form-control form-control-lg my-4"
                                name="birthday"
                                placeholder="Birthday (MM/DD)"
                            />
                            <button onClick={() => props.onHomeClick()} type="submit" className="btn btn-lg btn-block mb-4">Create Account</button>
                        </Form>
                    </Card1>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;