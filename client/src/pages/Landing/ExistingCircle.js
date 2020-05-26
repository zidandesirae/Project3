import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { GroupContext } from '../../utils/GroupContext';
import API from '../../utils/API';
import LandingContainer from '../../components/Landing/LandingContainer';
import { Form, Col } from 'react-bootstrap';

function ExistingCircle(props) {
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
                history.push('/signupform');
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

export default ExistingCircle;