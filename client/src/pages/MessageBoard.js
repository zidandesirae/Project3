import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../utils/UserContext';
import API from '../utils/API';
import PageContainer from '../components/General/PageContainer'
import { Row, Form, Col, Card, InputGroup, FormControl } from 'react-bootstrap';

const date = new Date();
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const m = months[date.getMonth()];
// const d = date.getDate();
// const y = date.getFullYear();
// const hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
// const h = hours[date.getHours()];
// const min = date.getMinutes();
// const postDate = `${m} ${d}, ${y}`;
// const postTime = `${h}:${min}`;

function MessageBoard(props) {
    const { userContext } = useContext(UserContext);

    const [message, setMessage] = useState({
        fullname: (userContext && userContext.fullname) || "",
        groupId: (userContext && userContext.groupId) || "",
        messagePost: "",
        // date: date,
        // time: date
    });

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts()
    }, []);

    const loadPosts = () => {
        API.getAllMessagesByGroupId({ groupId: (userContext && userContext.groupId) || "Not Logged In " })
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
                                type="text"
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
                    {posts.map(item => (
                        <Card key={item.id} className="border-dark my-2" style={{ border: "2px solid black" }}>
                            <Row className="p-3">
                                <Col md={4} sm={12}>
                                    <h5 className="m-2">{item.fullname}</h5>
                                    {/* <small className="m-2">{item.date}</small>
                                    <small className="m-2">{item.time}</small> */}
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