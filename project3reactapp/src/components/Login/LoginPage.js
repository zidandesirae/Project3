import React from "react";
import TitleH1 from "../Universal/TitleH1";

function LoginPage(props) {
    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <TitleH1 title="INSERT TITLE" subtitle="INSERT SUBTITLE" />
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