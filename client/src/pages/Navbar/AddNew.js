import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import LandingContainer from '../../components/Landing/LandingContainer';
import { Row, Col, Form } from 'react-bootstrap';
import API from '../../utils/API';

function AddNew() {
    const { userContext } = useContext(UserContext);
    const { groupContext, setGroupContext } = useContext(GroupContext);

    const history = useHistory();

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
                API.addUserToGroup((userContext && userContext.id) || "", res.data.id)
                .then(res => {
                    console.log(res.data)
                    history.push('/home')
                });
        });
    };

    return (
        <LandingContainer
            title="Your New Circle"
            subtitle="Enter a Name for your new Circle"
            className="signUpLogo"
        >
            <Col md={6} sm={10} className="mx-auto">
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

export default AddNew;