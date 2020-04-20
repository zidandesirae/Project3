// 5 TOTAL (as of now, more can be added)

import React from "react";
import SetRow from './SetRow';
import SetCol from './SetCol';
import UserInfo from './UserInfo';
import UserInput from './UserInput';

function UserSegment(props) {
    return (
        <div>
            <SetRow>
                <SetCol>
                    <UserInfo />
                </SetCol>
                <SetCol>
                    <UserInput />
                </SetCol>
            </SetRow>
            <hr className="my-2" />
        </div>
    );
}

export default UserSegment;