import React, { useContext } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { UserContext } from '../../UserContext';

function UserSegment(props) {

    const { userContext } = useContext(UserContext);

    const userSeg = [
        {
            id: 1,
            description: "Name:",
            placeholder: (userContext && userContext.fullname) || ""
        },
        {
            id: 2,
            description: "Email:",
            placeholder: (userContext && userContext.email) || ""
        },
        {
            id: 3,
            description: "Password:",
            placeholder: (userContext && userContext.password) || ""
        },
        {
            id: 4,
            description: "Phone Number:",
            placeholder: (userContext && userContext.phone) || ""
        },
        {
            id: 5,
            description: "Birthday:",
            placeholder: (userContext && userContext.birthday) || ""
        }
    ];

    return (
        <div>
            {userSeg.map(user => (
                <div key={user.id}>
                    <Row>
                        <Col md={6} sm={12}>
                            <h5>{user.description}</h5>
                        </Col>
                        <Col md={6} sm={12}>
                            <Form>
                                <input className="form-control" type="text" placeholder={user.placeholder} />
                            </Form>
                        </Col>
                    </Row>
                    <hr className="my-2" />
                </div>
            ))}
            <button type="button" className="btn">Save Changes</button>
        </div>
    );
}

export default UserSegment;