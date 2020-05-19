import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import { UserContext } from '../../UserContext';
import API from "../../utils/API";

function MemberSegment(props) {
    const { userContext } = useContext(UserContext);

    return (
        <Row>
            <Col>
                <h5>Group Members:</h5>
                {/* {members.map(member => {
                    const { fullname, email, phone, birthday } = member
                    return ( */}
                        <div className="card">
                            <div className="card-body border">
                                <Row>
                                    <Col>
                                        {/* <h5>{member.fullname}</h5> */}
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
                        </div>
                    {/* )
                })} */}
            </Col>
        </Row>
    );
}

export default MemberSegment;