import React from 'react';
import Description from "./Description";
import Row from "./Row";
import Col6 from './Col6';
import UserData from './UserData';

function MemberSpecs(props) {
    return (
        <Row>
            <Col6>
                <Description />
            </Col6>
            <Col6>
                <UserData />
            </Col6>
        </Row>
    );
}

export default MemberSpecs;