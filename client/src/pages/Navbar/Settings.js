import React, { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import PageContainer from '../../components/General/PageContainer';
import { Row, Col, Form } from 'react-bootstrap';

function Settings(props) {

    const { userContext } = useContext(UserContext);

    const user = [
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
        <PageContainer title="Settings">
            <h4 className="pb-4">Personal Information</h4>
            {
                user.map(item => (
                    <div key={item.id}>
                        <Row>
                            <Col md={6} sm={12}>
                                <h5>{item.description}</h5>
                            </Col>
                            <Col md={6} sm={12}>
                                <Form>
                                    <input className="form-control" type="text" placeholder={item.placeholder} />
                                </Form>
                            </Col>
                        </Row>
                        <hr className="my-2" />
                    </div>
                ))
            }
            <button type="button" className="btn">Save Changes</button>
        </PageContainer>
    );
}

export default Settings;