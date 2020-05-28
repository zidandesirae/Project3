import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import LandingContainer from '../../components/Landing/LandingContainer';
import { Col } from 'react-bootstrap';
import API from '../../utils/API';

function YouCircles() {
    const { userContext } = useContext(UserContext);
    const { groupContext, setGroupContext } = useContext(GroupContext);

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        API.getAllGroupsByUserId({ id: (userContext && userContext.id) || "Not Logged In" })
            .then(res => {
                setGroups(res.data)
                console.log(res.data)

            })
            .catch(err => console.log(err));
    }, []);

    return (
        <LandingContainer
            title="Your Circles"
            subtitle="Select which Circle Page to Enter"
            className="signUpLogo"
        >
            <Col md={6} sm={10} className="mx-auto">
                {groups.map(item =>
                    <Link to='/home' key={item.id} type="button" onClick={() => setGroupContext({id: item.id, name: item.name})} className="btn btn-lg btn-block my-2">{item.name}</Link>
                )}
            </Col>
        </LandingContainer>

    );
}

export default YouCircles;