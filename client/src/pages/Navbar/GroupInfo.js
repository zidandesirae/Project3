import React, { useContext, useState, useEffect } from 'react';
import { GroupContext } from '../../utils/GroupContext';
import PageContainer from '../../components/General/PageContainer';
import { Row, Col, Card } from 'react-bootstrap';
import API from '../../utils/API';

function GroupInfo(props) {
    
    const { groupContext } = useContext(GroupContext);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        API.getAllUsersByGroupId({ groupId: (groupContext && groupContext.id) || "Not Logged In" })
        .then(res => {
            setMembers(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <PageContainer title="Circle Information">
            <Row className="my-2">
                <Col>
                    <h5>Circle Name:</h5>
                </Col>
                <Col>
                    <h5>{(groupContext && groupContext.name) || ""}</h5>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <h5>Circle ID:</h5>
                </Col>
                <Col>
                    <h5>{(groupContext && groupContext.id) || ""}</h5>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <h5>Circle Members:</h5>
                    {members.map(item => (
                    <Card key={item.id} className="border border-dark my-2">
                        <div className="card-body">
                            <Row>
                                <Col>
                                    <h5>{item.fullname}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6>Email:</h6>
                                </Col>
                                <Col>
                                    <h6>{item.email}</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6>Phone Number:</h6>
                                </Col>
                                <Col>
                                    <h6>{item.phone}</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6>Birthday:</h6>
                                </Col>
                                <Col>
                                    <h6>{item.birthday}</h6>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    ))}
                </Col>
            </Row>
        </PageContainer>
    );
}

export default GroupInfo;