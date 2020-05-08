import React from "react";
import { Row, Col } from 'react-bootstrap';
function GroupName(props) {
    return (
        <div>
            <Row>
                <Col>
                    <h5>Group Name:</h5>
                </Col>
                <Col>
                    {/* TABLE INSERT  */}
                    <h5>INSERT FROM TABLE</h5>
                </Col>
            </Row>
            <hr className="my-2" />
            <Row>
                <Col>
                    <h5>Group ID:</h5>
                </Col>
                <Col>
                    {/* TABLE INSERT  */}
                    <h5>INSERT FROM TABLE</h5>
                </Col>
            </Row>
            <hr className="my-2" />
        </div>
    );
}

export default GroupName;