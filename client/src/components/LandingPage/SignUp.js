import React from 'react';
import OurCircle from "../Images/OurCircleLogoMed.png";
import TitleH1 from '../Universal/TitleH1';
import Card1 from '../Universal/Card1';
import { Link } from 'react-router-dom';

function SignUp(props) {
    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <img src={OurCircle} className="signUpLogo img-fluid" alt="image1" />
                    <TitleH1 title="Join Our Circle" subtitle="It's Time to Get in the Loop" />
                    <Card1>
                        <form onSubmit={e => props.onNewUserSubmit(e)}>
                            <input
                                value={props.newUser.fullname}
                                onChange={e => props.handleNewUserInputChange(e)}
                                className="form-control form-control-lg my-4"
                                name="fullname"
                                placeholder="Full Name"
                            />
                            <input
                                value={props.newUser.email}
                                onChange={e => props.handleNewUserInputChange(e)}
                                className="form-control form-control-lg my-4"
                                name="email"
                                placeholder="Email"
                            />
                            <input
                                value={props.newUser.password}
                                onChange={e => props.handleNewUserInputChange(e)}
                                className="form-control form-control-lg my-4"
                                name="password"
                                placeholder="Create Password (8-20 characters)"
                            />
                            <input
                                value={props.newUser.phone}
                                onChange={e => props.handleNewUserInputChange(e)}
                                className="form-control form-control-lg my-4"
                                type="tel"
                                name="phone"
                                placeholder="Phone Number (XXX-XXX-XXXX)"
                            />
                            <input
                                value={props.newUser.birthday}
                                onChange={e => props.handleNewUserInputChange(e)}
                                className="form-control form-control-lg my-4"
                                name="birthday"
                                placeholder="Birthday (MM/DD)"
                            />
                            <button type="submit" className="btn btn-lg btn-block mb-4">Create Account</button>
                        </form>
                    </Card1>
                </div>
            </div>
        </div>

    );
}

export default SignUp;