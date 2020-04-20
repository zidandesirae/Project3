// 3 TOTAL 

import React from "react";
import SetRow from './SetRow';
import SetCol from './SetCol';
import NotsInfo from './NotsInfo';
import NotsInput from './NotsInput';

function NotsSegment(props) {
    return (
        <div>
            <SetRow>
                <SetCol>
                    <NotsInfo />
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