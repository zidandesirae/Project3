import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import LandingContainer from '../../components/Landing/LandingContainer';
import { Row, Col, Form } from 'react-bootstrap';
import API from '../../utils/API';

function AddExisting() {
    const { userContext } = useContext(UserContext);
    const { groupContext, setGroupContext } = useContext(GroupContext);

    const history = useHistory();

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
        API.getGroupByIdName({ name: group.name, id: group.id })
            .then(res => {
                setGroupContext({id: res.data.id, name: res.data.name})
                API.addUserToGroup((userContext && userContext.id) || "", (groupContext && groupContext.id) || "")
                .then(res => {
                    console.log(res.data)
                    history.push('/home')
                });
        });
    };

    return (
        <LandingContainer
            title="Join Your Cicle"
            subtitle="Enter the existing Circle's information below:"
            className="signUpLogo"
        >
            <Col md={6} sm={10} className="mx-auto">
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

export default AddExisting;