import React from "react";
import TitleH1 from '../Universal/TitleH1';

function SignUpPage(props) {
    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <TitleH1 title="Welcome to Our Circle" subtitle="It's Time to Get in the Loop" />
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

export default SignUpPage;