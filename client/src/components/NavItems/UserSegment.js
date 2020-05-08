import React from "react";
import { Row, Col, Form } from 'react-bootstrap';

const userSeg = [
    {
        id: 1,
        description: "Name:",
        // TABLE INSERT 
        placeholder: ""
    },
    {
        id: 2,
        description: "Email:",
        // TABLE INSERT 
        placeholder: ""
    },
    {
        id: 3,
        description: "Password:",
        // TABLE INSERT 
        placeholder: ""
    },
    {
        id: 4,
        description: "Phone Number:",
        // TABLE INSERT 
        placeholder: ""
    },
    {
        id: 5,
        description: "Birthday:",
        // TABLE INSERT 
        placeholder: ""
    }
];

function UserSegment(props) {
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