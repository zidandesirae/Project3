import React, { useState } from "react";
import Card1 from '../components/Universal/Card1';
import OurCircle from "../components/Images/OurCircleLogoMed.png";
import ECform from "../components/LandingPage/ECform";
import API from '../utils/API';
import Login from '../components/LandingPage/Login';
import SignUp from '../components/LandingPage/SignUp';
import { Container, Row, Col, Image, Card, FormLabel } from 'react-bootstrap';

function ExistingCircle(props) {
    const [renderLogin, setRenderLogin] = useState();
    const [renderSignUp, setRenderSignUp] = useState();
    // Existing Group
    const [group, setGroup] = useState({
        name: "",
        id: ""
    });
    const [newUser, setNewUser] = useState({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
    });
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // EXISTING GROUP
    const handleGroupInputChange = e => {
        const { name, value } = e.target;
        setGroup(prevGroup => ({ ...prevGroup, [name]: value }))
    };

    const onGroupSubmit = e => {
        e.preventDefault();
        console.log(group);
    };

    // SIGN UP
    const handleNewUserInputChange = e => {
        const { name, value } = e.target;
        setNewUser(prevNewUser => ({ ...prevNewUser, [name]: value }))
    }
    const onNewUserSubmit = e => {
        e.preventDefault();
        console.log(newUser);

        API.saveNewUser(newUser);

    };

    // LOGIN
    const handleUserInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }))
    }
    const onUserSubmit = e => {
        e.preventDefault();
        console.log(user);

    };
    return (<>
        {!renderSignUp && !renderLogin &&
            <Container className="my-4 py-4">
                <Row>
                    <Col md={8} className="mx-auto text-center">
                        <Image src={OurCircle} className="signUpLogo" fluid />
                        <div className="m-4">
                            <h1 className="text-3d">Join Our Circle</h1>
                            <h4>It's Time to Get in the Loop</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="mx-auto">
                        <Card1>
                            <ECform group={group} handleGroupInputChange={handleGroupInputChange} onGroupSubmit={onGroupSubmit} />
                            <hr className="my-4" style={{ borderTop: "2px solid black" }} />
                            <FormLabel className="text-left h5 pt-4 pb-2">Select an Option to Join Your New Circle:</FormLabel>
                            <Row className="mx-auto">
                                <Col>
                                    <button onClick={() => setRenderLogin(true)} type="button" className="btn btn-lg btn-block mb-4">LOGIN</button>
                                </Col>
                                <Col>
                                    <button onClick={() => setRenderSignUp(true)} type="button" className="btn btn-lg btn-block mb-4">SIGN UP</button>
                                </Col>
                            </Row>
                        </Card1>
                    </Col>
                </Row>
            </Container>
        }
        {renderLogin && <Login user={user} handleUserInputChange={handleUserInputChange} onUserSubmit={onUserSubmit} />}
        {renderSignUp && <SignUp newUser={newUser} handleNewUserInputChange={handleNewUserInputChange} onNewUserSubmit={onNewUserSubmit} />}
    </>
    );
}

export default ExistingCircle;