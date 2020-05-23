import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import API from '../../utils/API';
import LandingContainer from '../../components/Landing/LandingContainer';
import LoginForm from "../../components/Landing/LoginForm";
import { Col } from 'react-bootstrap';


function Login(props) {
    const { userContext, setUserContext } = useContext(UserContext);
    const { groupContext, setGroupContext } = useContext(GroupContext);

    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: "",
        groupId: ""
    });

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
                API.findGroup({id: res.data.groupId})
                .then(res => {
                    console.log(res.data)
                    setGroupContext({id: res.data.id, name:res.data.name})
                });
                history.push('/home');
            });
    };

    return (
        <LandingContainer 
            title="Our Circle" 
            subtitle="Always in the Loop" 
            className="signUpLogo"
        >
            <Col md={7} className="mx-auto">
                <LoginForm 
                    user={user} 
                    handleUserInputChange={handleUserInputChange} 
                    onUserSubmit={onUserSubmit}
                />
            </Col>
        </LandingContainer>
    );
}

export default Login;