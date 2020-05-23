import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import API from '../../utils/API';
import LandingContainer from '../../components/Landing/LandingContainer';
import SignUpForm from "../../components/Landing/SignUpForm";
import NewCircle from './NewCircle';
import ExisingCircle from './ExistingCircle';
import Card1 from '../../components/General/Card1';
import { Card, FormLabel, Row, Col } from 'react-bootstrap';

function SignUp(props) {
    // useContext
    const { userContext, setUserContext } = useContext(UserContext);
    const { groupContext, setGroupContext } = useContext(GroupContext);

    // New User
    const [newUser, setNewUser] = useState({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        groupId: ""
    });

    const handleNewUserInputChange = e => {
        const { name, value } = e.target;
        setNewUser(prevNewUser => ({ ...prevNewUser, [name]: value }))
    }

    const onNewUserSubmit = e => {
        e.preventDefault();
        console.log(newUser);
        API.postUser(newUser)
            .then(res => {
                console.log(res)
                setUserContext(res.data)
            });
    };

    // Render New or Existing
    const [renderNew, setRenderNew] = useState();
    const [renderExisting, setRenderExisting] = useState();

    // useHistory
    const history = useHistory();

    // New Group
    const [newGroup, setNewGroup] = useState({
        id: "",
        name: ""
    });

    const handleNewGroupInputChange = e => {
        const { name, value } = e.target;
        setGroup(prevGroup => ({ ...prevGroup, [name]: value }))
    };

    const onNewGroupSubmit = e => {
        e.preventDefault();
        console.log(newGroup);
        // API.postGroup(newGroup)
        //     .then(res => {
        //         console.log(res)
        //         setGroupContext(res.data)
        //         setNewUser(data =>
        //             ({ ...data, groupId: res.data.id }))
        //         history.push('/home');
        //     });
    };

    // Existing Group
    const [group, setGroup] = useState({
        id: "",
        name: ""
    });

    const handleGroupInputChange = e => {
        const { name, value } = e.target;
        setGroup(prevGroup => ({ ...prevGroup, [name]: value }))
    };

    const onGroupSubmit = e => {
        e.preventDefault();
        // API.getGroup({ name: group.name, id: group.id })
        //     .then(res => {
        //         console.log(res)
        //         setGroupContext(res.data)
        //         setNewUser(data =>
        //             ({ ...data, groupId: res.data.id }))
        //         history.push('/home');
        //     });
    };

    return (
        <>
            {!renderNew && !renderExisting &&
                <LandingContainer
                    title="Our Circle"
                    subtitle="Always in the Loop"
                    className="signUpLogo"
                >
                    <Card1>
                        <FormLabel className="text-center h5 pt-4 pb-2">Fill out the form and press the submit button below to create your personal account.</FormLabel>
                        <SignUpForm
                            newUser={newUser}
                            handleNewUserInputChange={handleNewUserInputChange}
                            onNewUserSubmit={onNewUserSubmit}
                        />
                        <hr className="my-4" style={{ borderTop: "2px solid black" }} />
                        <FormLabel className="text-left h5 pt-2 pb-4">Please select one of the following options:</FormLabel>
                        <Row className="mx-auto">
                            <Col className="px-4">
                                <Card className="h-100" style={{border: "none"}}>
                                <FormLabel className="text-left h5 pt-4 pb-2">Looking to create a brand new Circle to share with others? Click below.</FormLabel>
                                <button
                                    onClick={() => setRenderNew(true)}
                                    type="button"
                                    className="btn btn-lg btn-block mb-4">
                                    Create New Circle
                                </button></Card>
                            </Col>
                            <div className="border border-dark"/>
                            <Col className="px-4">
                                <Card className="h-100" style={{border: "none"}}>
                                <FormLabel className="text-left h5 pt-4 pb-2">Do you have an invitation code to join an existing Circle? Click below.</FormLabel>
                                <button
                                    onClick={() => setRenderExisting(true)}
                                    type="button"
                                    className="btn btn-lg btn-block mb-4">
                                    Join Existing Circle
                                </button></Card>
                            </Col>
                        </Row>
                    </Card1>
                </LandingContainer>
            }
            {renderNew &&
                <NewCircle
                    group={group}
                    handleGroupInputChange={handleGroupInputChange}
                    onGroupSubmit={onGroupSubmit}
                />
            }
            {renderExisting &&
                <ExisingCircle
                    group={group}
                    handleGroupInputChange={handleGroupInputChange}
                    onGroupSubmit={onGroupSubmit}
                />
            }
        </>
    );
}

export default SignUp;


