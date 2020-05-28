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
        password: ""
    });

    const handleUserInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }))
    }

    const onUserSubmit = e => {
        e.preventDefault();
        API.postUserLogin({ email: user.email, password: user.password })
            .then(res => {
                console.log(res.data)
                setUserContext(res.data)
                API.getAllGroupsByUserId({id: res.data.id})
                .then(res => {
                    console.log(res);
                    //Set up to log into first group *** looking to change for when there are multiple groups
                    setGroupContext({id: res.data[0].id, name:res.data[0].name})
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
            <Col md={6} sm={10} className="mx-auto">
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