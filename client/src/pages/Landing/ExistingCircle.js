import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import API from '../../utils/API';
import LandingContainer from '../../components/Landing/LandingContainer';
// import SignUpForm from "./SignUpForm";
import { Form, Col } from 'react-bootstrap';

function ExistingCircle(props) {
    //useContext
    const { userContext, setUserContext } = useContext(UserContext);
    const { groupContext, setGroupContext } = useContext(GroupContext);

    // Render SignUpForm
    const [renderForm, setRenderForm] = useState();

    // useHistory
    const history = useHistory();

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
        API.getExistingGroup({ name: group.name, id: group.id })
            .then(res => {
                console.log(res.data[0])
                setGroupContext({id: res.data[0].id, name: res.data[0].name})
                setNewUser(data =>
                    ({ ...data, groupId: res.data[0].id }))
            });
    };

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
                history.push('/home');
            });
    };

    return (
        <LandingContainer
            title="Join Your Cicle"
            subtitle="Enter the existing Circle's information below:"
            className="signUpLogo"
        >
            <Col md={7} className="mx-auto">
                <Form onSubmit={e => onGroupSubmit(e)}>
                    <input
                        value={group.name}
                        onChange={e => handleGroupInputChange(e)}
                        className="form-control mb-4"
                        name="name"
                        placeholder="Existing Circle Name"
                    />
                    <input
                        value={group.id}
                        onChange={e => handleGroupInputChange(e)}
                        className="form-control mb-4"
                        name="id"
                        placeholder="Circle ID"
                    />
                    <button
                        type="submit"
                        className="btn btn-lg btn-block mb-4">
                        Submit
                    </button>
                </Form>
            </Col>
        </LandingContainer>
    );
}

export default ExistingCircle;