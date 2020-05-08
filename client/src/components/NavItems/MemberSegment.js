import React from "react";
import { Row, Col } from 'react-bootstrap';

// TABLE INSERT 
// const members = [];

const memberInfo = [
    {
        id: 1,
        description: "Email:",
        userData: ""
    },
    {
        id: 2,
        description: "Phone:",
        userData: ""
    },
    {
        id: 3,
        description: "Birthday:",
        userData: ""
    }
];

function MemberSegment(props) {
    return (
        <Row>
            <Col>
                <h5>{props.title}</h5>
                {/* {members.map(member => ( */}
                    <div className="card">
                        <div className="card-body border">
                            <Row>
                                <Col>
                                    {/* TABLE INSERT OF ALL MEMEBERS  */}
                                    <h5>INSERT NAME FROM TABLE</h5>
                                </Col>
                            </Row>
                            {memberInfo.map(info => (
                                <Row key={info.id}>
                                    <Col>
                                        <h5>{info.description}</h5>
                                    </Col>
                                    <Col>
                                        <h5>{info.userData}</h5>
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </div>
                {/* ))} */}
            </Col>
        </Row>
    );
}

export default MemberSegment;