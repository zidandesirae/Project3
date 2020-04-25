import React from "react";

// const members = [];

const memberInfo = [
    {
        id: 1,
        description: "Email:",
        userData: "INSERT FROM TABLE"
    },
    {
        id: 2,
        description: "Phone:",
        userData: "INSERT FROM TABLE"
    },
    {
        id: 3,
        description: "Birthday:",
        userData: "INSERT FROM TABLE"
    }
];

function MemberSegment(props) {
    return (
        <div className="row">
            <div className="col">
                <h5>{props.title}</h5>
                {/* {members.map(member => ( */}
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5>INSERT NAME FROM TABLE</h5>
                                </div>
                            </div>
                            {memberInfo.map(info => (
                                <div className="row" key={info.id}>
                                    <div className="col">
                                        <h5>{info.description}</h5>
                                    </div>
                                    <div className="col">
                                        <h5>{info.userData}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                {/* ))} */}
            </div>
        </div>
    );
}

export default MemberSegment;