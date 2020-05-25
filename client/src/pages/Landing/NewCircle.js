import React, { useState, useContext } from "react";
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import API from '../../utils/API';
import LandingContainer from '../../components/Landing/LandingContainer';
import SignUpForm from "./SignUpForm";
import { Form, Col } from 'react-bootstrap';

function NewCircle(props) {
    //useContext
    const { userContext, setUserContext } = useContext(UserContext);
    const { groupContext, setGroupContext } = useContext(GroupContext);

    // Render SignUpForm
    const [renderForm, setRenderForm] = useState();

    // useHistory
    const history = useHistory();

    // New Group
    const [newGroup, setNewGroup] = useState({
        id: "",
        name: ""
    });

    const handleNewGroupInputChange = e => {
        const { name, value } = e.target;
        setNewGroup(prevNewGroup => ({ ...prevNewGroup, [name]: value }))
    };

    const onNewGroupSubmit = e => {
        e.preventDefault();
        console.log(newGroup);
        API.postGroup(newGroup)
            .then(res => {
                console.log(res)
                setGroupContext(res.data)
                setUser(data =>
                    ({ ...data, groupId: res.data.id }));
                history.push('/signupform');
            });
    };

    // New User
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        groupId: ""
    });

    const handleUserInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }))
    }

    const onUserSubmit = e => {
        e.preventDefault();
        console.log(user);
        API.postUser(user)
            .then(res => {
                console.log(res)
                setUserContext(res.data)
                history.push('/home');
            });
    };

    return (
        // <>
        //     {!renderForm &&
        <LandingContainer
            title="Your New Circle"
            subtitle="Enter a Name for your new Circle"
            className="signUpLogo"
        >
            <Col md={7} className="mx-auto">
                <Form onSubmit={e => onNewGroupSubmit(e)}>
                    <input
                        value={newGroup.name}
                        onChange={e => handleNewGroupInputChange(e)}
                        className="form-control mb-4"
                        name="name"
                        placeholder=""
                    />
                    <button 
                        user={user}
                        handleUserInputChange={handleUserInputChange}
                        onUserSubmit={onUserSubmit}
                        // onClick={() => setRenderForm(true)}
                        type="submit"
                        className="btn btn-lg btn-block mb-4">
                        Submit
                    </button>
                </Form>
            </Col>
        </LandingContainer>
        //     }
        //     {renderForm &&
        //         <SignUpForm 
        // user={user} 
        // handleUserInputChange={handleUserInputChange} 
        // onUserSubmit={onUserSubmit} 
        //         />
        //     }
        // </>
    );
}

export default NewCircle;