import React, { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import PageContainer from '../../components/General/PageContainer';
import { Row, Col, Card } from 'react-bootstrap';

function GroupInfo(props) {

    const { groupContext } = useContext(GroupContext);
    const { userContext } = useContext(UserContext);

    return (
        <PageContainer title="Group Information">
            <Row>
                <Col>
                    <h5>Group Name:</h5>
                </Col>
                <Col>
                    <h5>{(groupContext && groupContext.name) || ""}</h5>
                </Col>
            </Row>
            <hr className="my-2" />
            <Row>
                <Col>
                    <h5>Group ID:</h5>
                </Col>
                <Col>
                    <h5>{(groupContext && groupContext.id) || ""}</h5>
                </Col>
            </Row>
            <hr className="my-2" />
            <Row>
                <Col>
                    <h5>Group Members:</h5>
                    <Card>
                        <div className="card-body border">
                            <Row>
                                <Col>
                                    <h5>ENTER NAME</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Email:</h5>
                                </Col>
                                <Col>
                                    <h5>ENTER EMAIL</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Phone Number:</h5>
                                </Col>
                                <Col>
                                    <h5>ENTER PHONE</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Birthday:</h5>
                                </Col>
                                <Col>
                                    <h5>ENTER BIRTHDAY</h5>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </PageContainer>
    );
}

export default GroupInfo;