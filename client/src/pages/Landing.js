import React from "react";
import { Link } from 'react-router-dom';
import TitleH1 from "../components/Universal/TitleH1";
import OurCircle from "../components/Images/OurCircleLogoMed.png";

function Landing(props) {
    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-10 mx-auto text-center">
                    <img src={OurCircle} className="img-fluid" alt="image1" />
                    <TitleH1 title="Our Circle" subtitle="Always in the Loop" />
                </div>
                <div className="col-md-5 mx-auto text-center">
                    <Link to="/newcircle" type="button" className="btn btn-lg btn-block mb-4">Create a New Circle</Link>
                    <Link to="/existingcircle" type="button" className="btn btn-lg btn-block mb-4">Join an Existing Circle</Link>
                    <Link to="/login" type="button" className="btn btn-lg btn-block mb-4">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;

