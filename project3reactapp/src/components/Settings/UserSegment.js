import React from "react";

const userSeg = [
    {
        id: 1,
        description: "Name:",
        placeholder: "INSERT FROM TABLE"
    },
    {
        id: 2,
        description: "Email:",
        placeholder: "INSERT FROM TABLE"
    },
    {
        id: 3,
        description: "Password:",
        placeholder: "INSERT FROM TABLE"
    },
    {
        id: 4,
        description: "Phone Number:",
        placeholder: "INSERT FROM TABLE"
    },
    {
        id: 5,
        description: "Birthday:",
        placeholder: "INSERT FROM TABLE"
    }
];

function UserSegment(props) {
    return (
        userSeg.map(user => (
            <div>
                <div className="row" key={user.id}>
                    <div className="col-md-6 col-sm-12">
                        <h5>{user.description}</h5>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <form>
                            <input className="form-control" type="text" placeholder={user.placeholder} />
                        </form>
                    </div>
                </div>
                <hr className="my-2" />
            </div>
        ))
    );
}

export default UserSegment;