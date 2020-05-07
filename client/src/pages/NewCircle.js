import React, { useState } from "react";
import TitleH1 from '../components/Universal/TitleH1';
import Card1 from '../components/Universal/Card1';
import OurCircle from "../components/Images/OurCircleLogoMed.png";
// import JoinCircleBtns from '../components/LandingPage/JoinCircleBtns';
import NCform from '../components/LandingPage/NCform';
import API from '../utils/API';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function NewCircle() {
    const [group, setGroup] = useState({ name: "" });
    const [renderLogin, setRenderLogin] = useState();
    const [renderSignUp, setRenderSignUp] = useState();


    const handleInputChange = e => {
        const { name, value } = e.target;
        setGroup(prevGroup => ({ ...prevGroup, [name]: value }))
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log(group);
        API.saveGroup(group);
    };

    return ( <>
        { !renderSignUp && !renderLogin &&
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <img src={OurCircle} className="signUpLogo img-fluid" alt="image1" />
                    <TitleH1 title="Join Our Circle" subtitle="It's Time to Get in the Loop" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-sm-12 mx-auto">
                    <Card1>
                        <NCform group={group} handleInputChange={handleInputChange} onSubmit={onSubmit} />
                        <hr className="my-3" style={{ borderTop: "2px solid black" }} />
                        {/* <JoinCircleBtns /> */}
                        <label className="text-left h5 pt-4 pb-2">Select an Option to Join Your New Circle:</label>
                        <div className="row mx-auto">
                            <div className="col">
                                <button onClick={() => setRenderLogin(true)} type="button" className="btn btn-lg btn-block mb-4">LOGIN</button>
                            </div>
                            <div className="col">
                                <button onClick={() => setRenderSignUp(true)} type="button" className="btn btn-lg btn-block mb-4">SIGNUP</button>
                            </div>
                        </div>
                    </Card1>
                </div>
            </div>
        </div>}
        {renderLogin && <Login />}
        {renderSignUp && <SignUp />}
        </>
    );
}

export default NewCircle;