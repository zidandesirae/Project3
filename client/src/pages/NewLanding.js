import React from "react";
import { Link } from 'react-router-dom';
import TitleH1 from "../components/Universal/TitleH1";
// import Card1 from '../Universal/Card1';
// import Card from '../Universal/Card';
import OurCircle from "../components/Images/OurCircleLogoMed.png";

function NewLandingPage(props) {
    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-10 mx-auto text-center">
                    <img src={OurCircle} className="img-fluid" alt="image1" />
                    <TitleH1 title="Our Circle" subtitle="Always in the Loop" />
                    {/* <Link to="/newcircle" type="button" className="btn btn-lg btn-block mb-4">Create a New Circle</Link>
                    <Link to="/newcircle" type="button" className="btn btn-lg btn-block mb-4">Join an Existing Circle</Link>
                    <Link to="/newcircle" type="button" className="btn btn-lg btn-block mb-4">Login</Link> */}
                    <div className="row">
                        <div className="col-sm-4">
                            {/* <Card1>
                                    <h5>Create New Group</h5>
                                </Card1> */}
                            <Link to="/newcircle" type="button" className="btn btn-lg btn-block mb-4 h-75">Create a New Circle</Link>
                        </div>
                        <div className="col-sm-4">
                            {/* <Card1>
                                <h5>Join Existing Group</h5>
                                </Card1> */}
                            <Link to="/existingcircle" type="button" className="btn btn-lg btn-block mb-4 h-75">Join an Existing Circle</Link>
                        </div>
                        <div className="col-sm-4">
                            {/* <Card1>
                                <h5>Returning User Login</h5>
                                </Card1> */}
                            <Link to="/login" type="button" className="btn btn-lg btn-block mb-4 h-75">Returning Member Login</Link>
                        </div>
                    </div>
                </div>

                {/* <div className="col-md-7 mx-auto text-centers">
                <img src={OurCircle} className="img-fluid" alt="image1" />
                </div>
                <div className="col-md-5 mx-auto text-center">
                    <TitleH1 title="Our Circle" subtitle="Always in the Loop" />
                    <Link to="/newcircle" type="button" className="btn btn-lg btn-block mb-4">Create a New Circle</Link>
                    <Link to="/newcircle" type="button" className="btn btn-lg btn-block mb-4">Join an Existing Circle</Link>
                    <Link to="/newcircle" type="button" className="btn btn-lg btn-block mb-4">Login</Link>
                </div> */}
            </div>
        </div>
    );
}

export default NewLandingPage;

