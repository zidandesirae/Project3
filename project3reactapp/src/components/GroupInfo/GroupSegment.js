import React from "react";
import Row from './Row';
import Col from './Col';
import Description from "./Description";
import UserData from './UserData';

function GroupSegment(props) {
    return (
        <div>
            <Row>
                <Col>
                    <Description />
                </Col>
                <Col>
                    <UserData />
                </Col>
            </Row>
            <hr className="my-2" />
        </div>
    );
}

export default GroupSegment;