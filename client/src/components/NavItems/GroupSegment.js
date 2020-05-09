import React, { useContext } from "react";
import { Row, Col } from 'react-bootstrap';
import { GroupContext } from '../../GroupContext';
import API from '../../utils/API';

function GroupName(props) {

    const { groupContext } = useContext(GroupContext);

    return (
        <div>
            <Row>
                <Col>
                    <h5>Group Name:</h5>
                </Col>
                <Col>
                    {/* TABLE INSERT  */}
                    <h5>{(groupContext && groupContext.name) || ""}</h5>
                </Col>
            </Row>
            <hr className="my-2" />
            <Row>
                <Col>
                    <h5>Group ID:</h5>
                </Col>
                <Col>
                    {/* TABLE INSERT  */}
                    <h5>{(groupContext && groupContext.id) || ""}</h5>
                </Col>
            </Row>
            <hr className="my-2" />
        </div>
    );
}

export default GroupName;