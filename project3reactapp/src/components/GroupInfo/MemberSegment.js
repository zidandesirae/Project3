import React from "react";
import Row from './Row';
import Col from './Col';
import MemberInfo from './MemberInfo';
import Description from "./Description";

function MemberSegment(props) {
    return (
        <div>
            <Row>
                <Col>
                    <Description />
                    <MemberInfo />
                </Col>
            </Row>
        </div>
    );
}

export default MemberSegment;