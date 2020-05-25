import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import { GroupContext } from '../../utils/GroupContext';
import PageContainer from '../../components/General/PageContainer';
import { Row, Col, Card } from 'react-bootstrap';
import API from '../../utils/API';

function GroupInfo(props) {

    const { groupContext } = useContext(GroupContext);
    const { userContext } = useContext(UserContext);
    
    const [allMembers, setAllMembers] = useState();

    API.getAllUsersByGroupId({ groupId: (userContext && userContext.groupId) || "" })
        .then(res => {
            console.log(res.data)
            // need to add spread for array and then map
        });

    return (
        <PageContainer title="Circle Information">
            <Row>
                <Col>
                    <h5>Circle Name:</h5>
                </Col>
                <Col>
                    <h5>{(groupContext && groupContext.name) || ""}</h5>
                </Col>
            </Row>
            <hr className="my-2" />
            <Row>
                <Col>
                    <h5>Circle ID:</h5>
                </Col>
                <Col>
                    <h5>{(groupContext && groupContext.id) || ""}</h5>
                </Col>
            </Row>
            <hr className="my-2" />
            <Row>
                <Col>
                    <h5>Circle Members:</h5>
                    {/* {.map(item => ( */}
                    <Card>
                        <div className="card-body border">
                            <Row>
                                <Col>
                                    {/* <h5>{item.fullname}</h5> */}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Email:</h5>
                                </Col>
                                <Col>
                                    {/* <h5>{item.email}</h5> */}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Phone Number:</h5>
                                </Col>
                                <Col>
                                    {/* <h5>{item.phone}</h5> */}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Birthday:</h5>
                                </Col>
                                <Col>
                                    {/* <h5>{item.birthday}</h5> */}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    {/* ))} */}
                </Col>
            </Row>
        </PageContainer>
    );
}

export default GroupInfo;