import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import API from '../../utils/API';
import LandingContainer from '../../components/Landing/LandingContainer';
import { Form, Col } from 'react-bootstrap';

function SignUpForm(props) {
        //useContext
        const { userContext, setUserContext } = useContext(UserContext);
        const { groupContext } = useContext(GroupContext);
        
        // useHistory
        const history = useHistory();

        // New User
        const [user, setUser] = useState({
            fullname: "",
            email: "",
            password: "",
            phone: "",
            birthday: "",
            groupId: (groupContext && groupContext.id) || ""
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
        <LandingContainer
            title="Join Your Circle"
            subtitle="Create Your Personal Account"
            className="signUpLogo"
        >
            <Col md={7} className="mx-auto">
                <Form onSubmit={e => onUserSubmit(e)}>
                    <input
                        value={user.fullname}
                        onChange={e => handleUserInputChange(e)}
                        className="form-control mb-4"
                        name="fullname"
                        placeholder="Full Name"
                    />
                    <input
                        value={user.email}
                        onChange={e => handleUserInputChange(e)}
                        className="form-control my-4"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        value={user.password}
                        onChange={e => handleUserInputChange(e)}
                        className="form-control my-4"
                        name="password"
                        placeholder="Create Password (8-20 characters)"
                    />
                    <input
                        value={user.phone}
                        onChange={e => handleUserInputChange(e)}
                        className="form-control my-4"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (XXX-XXX-XXXX)"
                    />
                    <input
                        value={user.birthday}
                        onChange={e => handleUserInputChange(e)}
                        className="form-control my-4"
                        name="birthday"
                        placeholder="Birthday (MM/DD)"
                    />
                    <button
                        type="submit"
                        className="btn btn-lg btn-block mb-4"
                    >
                        Create Account
                    </button>
                </Form>
            </Col>
        </LandingContainer>
    );
}

export default SignUpForm;