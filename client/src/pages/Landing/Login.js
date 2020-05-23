import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import API from '../../utils/API';
import LandingContainer from '../../components/Landing/LandingContainer';
import LoginForm from "../../components/Landing/LoginForm";
import Card1 from '../../components/General/Card1';


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
                //API call here groupId(UT) = id(GT) and get the group name
                //Set the GroupContext equal to the above info
                history.push('/home');
            });
    };

    return (
        <LandingContainer 
            title="Our Circle" 
            subtitle="Always in the Loop" 
            className="signUpLogo"
        >
            <Card1>
                <LoginForm 
                    user={user} 
                    handleUserInputChange={handleUserInputChange} 
                    onUserSubmit={onUserSubmit}
                />
            </Card1>
        </LandingContainer>
    );
}

export default Login;