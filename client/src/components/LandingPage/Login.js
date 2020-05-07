import React, { useState } from 'react';
import TitleH1 from "../Universal/TitleH1";
import Card1 from '../Universal/Card1';
import OurCircle from '../Images/OurCircleLogoMed.png';
import { Link } from 'react-router-dom';
import Main from '../../pages/Main';

function Login(props) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [group, setGroup] = useState({
        name: "",
        id: ""
    });

    const handleGroupInputChange = e => {
        const { name, value } = e.target;
        setGroup(prevGroup => ({ ...prevGroup, [name]: value }))
    };

    const onGroupSubmit = e => {
        e.preventDefault();
        console.log(group);
    };

    const handleUserInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }))
    }
    const onUserSubmit = e => {
        e.preventDefault();
        console.log(user);

    };

    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <img src={OurCircle} className="signUpLogo img-fluid" alt="image1" />
                    <TitleH1 title="Our Circle" subtitle="Always in the Loop" />
                    <Card1>
                        <form onSubmit={e => props.onUserSubmit(e)}>
                            <input
                                className="form-control form-control-lg mt-2"
                                name="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={e => props.handleUserInputChange(e)}
                            />
                            <input
                                className="form-control form-control-lg my-4"
                                name="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={e => props.handleUserInputChange(e)}
                            />
                            <button onClick={() => <Main />} type="submit" className="btn btn-lg btn-block mb-4">LOGIN</button>
                        </form>                    
                    </Card1>
                </div>
            </div>
        </div>
    );
}

export default Login;
