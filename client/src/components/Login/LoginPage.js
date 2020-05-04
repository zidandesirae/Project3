import React from "react";
import TitleH1 from "../Universal/TitleH1";
import Card1 from '../Universal/Card1';
import OurCircle from "../Images/OurCircleLogoMed.png";

function LoginPage(props) {
    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                <img src={OurCircle} className="signUpLogo img-fluid" alt="image1" />
                    <TitleH1 title="Our Circle" subtitle="Always in the Loop" />
                    <Card1>
                        {props.children}
                    </Card1>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;