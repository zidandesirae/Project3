import React from "react";

function GroupName(props) {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h5>Group Name:</h5>
                </div>
                <div className="col">
                    {/* TABLE INSERT  */}
                    <h5>INSERT FROM TABLE</h5>
                </div>
            </div>
            <hr className="my-2" />
        </div>
    );
}

export default GroupName;