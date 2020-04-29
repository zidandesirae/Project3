// THIS COMPONENT HAS BEEN REMOVED FROM MVP 
// USED FOR FUTURE DEVELOPMENT 

import React from "react";

const userSeg = [
    {
        id: 1,
        description: "Notify me when there are Calendar Updates"
    },
    {
        id: 2,
        description: "Notify me when there are List Updates"
    },
    {
        id: 3,
        description: "Notify me of Photo Album Updates"
    },
    {
        id: 4,
        description: "OTHER UPDATES"
    }
];

function Notifications(props) {
    return (
        userSeg.map(user => (
            <div>
                <div className="row" key={user.id}>
                    <div className="col-md-6 col-sm-12">
                        <h5>{user.description}</h5>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <form>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck" />
                                <label className="form-check-label" for="exampleCheck"></label>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className="my-2" />
            </div>
        ))
    );
}
export default Notifications;