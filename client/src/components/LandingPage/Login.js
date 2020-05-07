import React, { useState } from 'react';
import Card1 from '../Universal/Card1';
import OurCircle from '../Images/OurCircleLogoMed.png';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';


function Login(props) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [group, setGroup] = useState({
        name: "",
        id: ""
    });

    const handleGroupInputChange = e => {
        const { name, value } = e.target;
        setGroup(prevGroup => ({ ...prevGroup, [name]: value }))
    };

    const onGroupSubmit = e => {
        e.preventDefault();
        console.log(group);
    };

    const handleUserInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }))
    }
    const onUserSubmit = e => {
        e.preventDefault();
        console.log(user);

    };

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
                        <Form onSubmit={e => props.onUserSubmit(e)}>
                            <input
                                className="form-control form-control-lg mt-2"
                                name="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={e => props.handleUserInputChange(e)}
                            />
                            <input
                                className="form-control form-control-lg my-4"
                                name="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={e => props.handleUserInputChange(e)}
                            />
                            <button type="submit" className="btn btn-lg btn-block mb-4">LOGIN</button>
                        </Form>
                    </Card1>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
