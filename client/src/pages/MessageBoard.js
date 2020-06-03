import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../utils/UserContext';
import { GroupContext } from '../utils/GroupContext';
import API from '../utils/API';
import PageContainer from '../components/General/PageContainer'
import { Row, Form, Col, Card, InputGroup, FormControl } from 'react-bootstrap';
import moment from 'moment';

function MessageBoard(props) {
    const { userContext } = useContext(UserContext);
    const { groupContext } = useContext(GroupContext);

    const [message, setMessage] = useState({
        fullname: (userContext && userContext.fullname) || "",
        userId: (userContext && userContext.id) || "",
        groupId: (groupContext && groupContext.id) || "",
        messagePost: ""
    });

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts()
    }, []);

    const loadPosts = () => {
        API.getAllMessagesByGroupId({ groupId: (groupContext && groupContext.id) || "Not Logged In " })
            .then(res => {
                setPosts(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    const handleMessageInputChange = e => {
        const { name, value } = e.target;
        setMessage(prevMessage => ({ ...prevMessage, [name]: value }))
    };

    const onMessageSubmit = e => {
        e.preventDefault();
        console.log(message);
        API.postMessage(message)
            .then(res => {
                console.log(res);
            })
            .then(() => loadPosts())
            .catch(err => console.log(err));

    };

    return (
        <PageContainer title="Message Board">
            <Form onSubmit={e => onMessageSubmit(e)}>
                <Row>
                    <Col className="my-2">
                        <InputGroup className="">
                            <FormControl
                                value={message.messagePost}
                                onChange={e => handleMessageInputChange(e)}
                                className="form-control border"
                                name="messagePost"
                                placeholder="Enter Your Message Here..."
                            />
                            <InputGroup.Append>
                                <button className="btn" type="submit">POST</button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col>
                    {posts.reverse().map(item => (
                        <Card key={item.id} className="border-dark my-2" style={{ border: "2px solid black" }}>
                            <Row className="p-3">
                                <Col md={4} sm={12}>
                                    <h5 className="m-2">{item.fullname}</h5>
                                    <small className="m-2">{moment(item.createdAt).format('MM-DD-YY')}</small>
                                    <small className="m-2">{moment(item.createdAt).format('hh:mm A')}</small>
                                </Col>
                                <Col md={8} sm={12}>
                                    <p className="m-2">{item.messagePost}</p>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>
            </Row>
        </PageContainer>
    );
}

export default MessageBoard;