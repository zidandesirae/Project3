import React from "react";
import MemberSpecs from "./MemberSpecs";
import Row from "./Row";
import Col from './Col';
import UserData from './UserData';
import Card from './Card';

function MemberInfo(props) {
    return (
        <div>
            <Card>
                <Row>
                    <Col>
                        <UserData />
                    </Col>
                </Row>
                <MemberSpecs />
                <MemberSpecs />
                <MemberSpecs />
            </Card>
        </div>
    );
}

export default MemberInfo;