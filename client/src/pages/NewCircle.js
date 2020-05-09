import React, { useState, useContext } from "react";
import NCform from '../components/LandingPage/NCform';
import Login from '../components/LandingPage/Login';
import SignUp from '../components/LandingPage/SignUp';
import Card1 from '../components/Universal/Card1';
import OurCircle from "../components/Images/OurCircleLogoMed.png";
import { Container, Row, Col, Image, FormLabel } from 'react-bootstrap';

import API from '../utils/API';
import { UserContext } from '../UserContext';
import { GroupContext } from '../GroupContext';
import { useHistory } from 'react-router-dom';

function NewCircle(props) {
    const [renderLogin, setRenderLogin] = useState();
    const [renderSignUp, setRenderSignUp] = useState();

    const [group, setGroup] = useState({
        name: ""
    });

    const [newUser, setNewUser] = useState({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        groupId: ""
    });

    const [user, setUser] = useState({
        email: "",
        password: "",
        groupId: ""
    });

    const { userContext, setUserContext } = useContext(UserContext);
    const { groupContext, setGroupContext } = useContext(GroupContext);

    // GROUP
    const handleGroupInputChange = e => {
        const { name, value } = e.target;
        setGroup(prevGroup => ({ ...prevGroup, [name]: value }))
    };

    const onGroupSubmit = e => {
        e.preventDefault();
        API.saveGroup(group)
            .then(res => {
                console.log(res)
                setGroupContext(res.data)
                setNewUser(data =>
                    ({ ...data, groupId: res.data.id }))
                // NEED to add when we have the connection of many groups to user
                // setUser(
                // {... user, groupId: res.data.id})
            });
    };

    // SIGN UP
    let history = useHistory();

    const handleNewUserInputChange = e => {
        const { name, value } = e.target;
        setNewUser(prevNewUser => ({ ...prevNewUser, [name]: value }))
    }
    const onNewUserSubmit = e => {
        e.preventDefault();
        API.saveUser(newUser)
            .then(res => {
                console.log(res)
                setUserContext(res.data)
                history.push('/home');
            });
    };

    // LOGIN
    const handleUserInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }))
    }
    const onUserSubmit = e => {
        e.preventDefault();
        API.loginUser({ email: user.email, password: user.password })
            .then(res => {
                console.log(res)
                setUserContext(res.data)
                history.push('/home');
            });
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
                            <NCform group={group} handleGroupInputChange={handleGroupInputChange} onGroupSubmit={onGroupSubmit} />
                            <hr className="my-4" style={{ borderTop: "2px solid black" }} />
                            <FormLabel className="text-left h5 pt-4 pb-2">Sign Up to Create Your Personal Page:</FormLabel>
                            <Row className="mx-auto">
                                {/* <Col>
                                    <button onClick={() => setRenderLogin(true)} type="button" className="btn btn-lg btn-block mb-4">LOGIN</button>
                                </Col> */}
                                <Col>
                                    <button onClick={() => setRenderSignUp(true)} type="button" className="btn btn-lg btn-block mb-4">SIGN UP</button>
                                </Col>
                            </Row>
                        </Card1>
                    </Col>
                </Row>
            </Container>
        }
        {/* {renderLogin && <Login user={user} handleUserInputChange={handleUserInputChange} onUserSubmit={onUserSubmit} />} */}
        {renderSignUp && <SignUp newUser={newUser} handleNewUserInputChange={handleNewUserInputChange} onNewUserSubmit={onNewUserSubmit} />}
    </>
    );
}

export default NewCircle;