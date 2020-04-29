import React from "react";
import TitleH1 from "../Universal/TitleH1";
import OurCircle from "../Images/OurCircleLogoMed.png";

function LoginPage(props) {
    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                <img src={OurCircle} className="signUpLogo" alt="image1" />
                    <TitleH1 title="Our Circle" subtitle="Always in the Loop" />
                    <div className="card">
                        <div className="card-body">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;