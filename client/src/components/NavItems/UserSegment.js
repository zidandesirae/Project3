import React from "react";

const userSeg = [
    {
        id: 1,
        description: "Name:",
        // TABLE INSERT 
        placeholder: "INSERT FROM TABLE"
    },
    {
        id: 2,
        description: "Email:",
        // TABLE INSERT 
        placeholder: "INSERT FROM TABLE"
    },
    {
        id: 3,
        description: "Password:",
        // TABLE INSERT 
        placeholder: "INSERT FROM TABLE"
    },
    {
        id: 4,
        description: "Phone Number:",
        // TABLE INSERT 
        placeholder: "INSERT FROM TABLE"
    },
    {
        id: 5,
        description: "Birthday:",
        // TABLE INSERT 
        placeholder: "INSERT FROM TABLE"
    }
];

function UserSegment(props) {
    return (
        <div>
            {userSeg.map(user => (
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
            ))}
            <button type="button" className="btn">Save Changes</button>
        </div>
    );
}

export default UserSegment;