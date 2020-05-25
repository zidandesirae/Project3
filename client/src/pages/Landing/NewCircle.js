import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { GroupContext } from '../../utils/GroupContext';
import API from '../../utils/API';
import LandingContainer from '../../components/Landing/LandingContainer';
import { Form, Col } from 'react-bootstrap';

function NewCircle(props) {
    //useContext
    const { groupContext, setGroupContext } = useContext(GroupContext);

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
                history.push('/signupform');
            });
    };

    return (
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
                        type="submit"
                        className="btn btn-lg btn-block mb-4">
                        Submit
                    </button>
                </Form>
            </Col>
        </LandingContainer>
    );
}

export default NewCircle;