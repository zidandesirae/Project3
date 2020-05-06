import React from 'react';
import { Link } from 'react-router-dom';

function JoinGroupBtns(props) {
    return (
        <div>
            <label className="text-left h5 pt-4 pb-2">Select an option to join your new group:</label>
            <div className="row mx-auto">
                <div className="col">
                    <Link to="/login" type="button" className="btn btn-lg btn-block mb-4">LOGIN</Link>
                </div>
                <div className="col">
                    <Link to="/signup" type="button" className="btn btn-lg btn-block mb-4">SIGNUP</Link>
                </div>
            </div>
        </div>
    );
}

export default JoinGroupBtns;