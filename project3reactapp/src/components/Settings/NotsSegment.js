// 3 TOTAL 

import React from "react";
import SetRow from './SetRow';
import SetCol from './SetCol';
import UserInfo from './UserInfo';
import NotsInput from './NotsInput';

function NotsSegment(props) {
    return (
        <div>
            <SetRow>
                <SetCol>
                    <UserInfo />
                </SetCol>
                <SetCol>
                    <NotsInput />
                </SetCol>
            </SetRow>
            <hr className="my-2" />
        </div>
    );
}

export default NotsSegment;