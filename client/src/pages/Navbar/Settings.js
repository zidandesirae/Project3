import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import PageContainer from '../../components/General/PageContainer';
import { Row, Col, Form } from 'react-bootstrap';
import API from '../../utils/API';

function Settings(props) {

    const { userContext, setUserContext } = useContext(UserContext);
    const [changes, setChanges] = useState({
        id: (userContext && userContext.id) || "",
        fullname: (userContext && userContext.fullname) || "",
        email: (userContext && userContext.email) || "",
        password: (userContext && userContext.password) || "",
        phone: (userContext && userContext.phone) || "",
        birthday: (userContext && userContext.birthday) || ""
    });

    const user = [
        {
            id: 1,
            description: "Name:",
            placeholder: changes.fullname
        },
        {
            id: 2,
            description: "Email:",
            placeholder: changes.email
        },
        {
            id: 3,
            description: "Password:",
            placeholder: changes.password
        },
        {
            id: 4,
            description: "Phone Number:",
            placeholder: changes.phone
        },
        {
            id: 5,
            description: "Birthday:",
            placeholder: changes.birthday
        }
    ];

    return (
        <PageContainer title="Settings">
            <h4 className="pb-3">Personal Information</h4>
            {
                user.map(item => (
                    <Row className="my-2" key={item.id}>
                        <Col md={6} sm={12}>
                            <h5>{item.description}</h5>
                        </Col>
                        <Col md={6} sm={12}>
                            <Form>
                                <input className="form-control border w-100" type="text" placeholder={item.placeholder} style={{ fontSize: "16px" }} />
                            </Form>
                        </Col>
                    </Row>
                ))
            }
            <button type="button" className="btn">Save Changes</button>
            <hr className="my-4 border-dark" />
            {/* MAKE NEW COMPONENT TO HOLD CONTENT BELOW */}
            <h4 className="pb-3">Additional Circles</h4>
            <Row className="my-2">
                <Col sm={12}>
                    <h6>Looking to create a new circle or join an exising circle?</h6>
                </Col>
                <Col md={6} sm={12}>
                    <button type="button" className="btn btn-block my-2">Create a New Circle</button>
                </Col>
                <Col md={6} sm={12}>
                    <button type="button" className="btn btn-block my-2">Join an Existing Circle</button>
                </Col>
            </Row>
            <Row className="mt-4 mb-2">
                <Col sm={12}>
                    <h6>Already a member of another Circle?</h6>
                </Col>
                <Col md={6} sm={12}>
                    <button type="button" className="btn btn-block my-2">Switch Circle Page</button>
                </Col>
            </Row>
        </PageContainer>
    );
}

export default Settings;