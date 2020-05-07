import React from "react";
import TitleH1 from '../components/Universal/TitleH1';
import Card1 from '../components/Universal/Card1';
import OurCircle from "../components/Images/OurCircleLogoMed.png";
import JoinCircleBtns from '../components/LandingPage/JoinCircleBtns';
import NCform from '../components/LandingPage/NCform';

function NewCircle() {
    return (
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
                        <NCform />
                        <hr className="my-3" style={{borderTop: "2px solid black"}}/>
                        <JoinCircleBtns />
                    </Card1>
                </div>
            </div>
        </div>
    );
}

export default NewCircle;