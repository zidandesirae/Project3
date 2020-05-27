import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../utils/UserContext';
// import { GroupContext } from '../utils/GroupContext';
import API from '../utils/API';
import PageContainer from '../components/General/PageContainer'
import { Row, Form, Col, Card } from 'react-bootstrap';
// import MessageBoardSetup from '../components/MessageBoard/MessageBoardSetup';
// import Store from '../components/MessageBoard/Store';

const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const m = months[date.getMonth()];
const d = date.getDate();
const y = date.getFullYear();
const hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
const h = hours[date.getHours()];
const min = date.getMinutes();
const postDate = `${m} ${d}, ${y}`;
const postTime = `${h}:${min}`;

function MessageBoard(props) {
    const { userContext } = useContext(UserContext);
    // const { groupContext } = useContext(GroupContext);

    const [message, setMessage] = useState({
        fullname: (userContext && userContext.fullname) || "",
        groupId: (userContext && userContext.groupId) || "",
        messagePost: "",
        date: postDate,
        time: postTime
    });

    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     API.getAllMessagesByGroupId({groupId: ( userContext && userContext.groupId) || "Not Logged In "})
    //     .then(res => {
    //         setPosts(res.data)
    //         console.log(res.data)
    //     })
    //     .catch(err => console.log(err));
    // }, []);

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
            });
    };

    return (
        <PageContainer title="Message Board">
            {/* <Store>
                <MessageBoardSetup />
            </Store> */}
            <Form onSubmit={e => onMessageSubmit(e)}>
                <Row>
                    <Col sm={8}>
                        <input
                            value={message.messagePost}
                            onChange={e => handleMessageInputChange(e)}
                            className="form-control form-control-lg mt-2 mb-4"
                            name="messagePost"
                            placeholder="Share your thoughts in this Post!"
                        />
                    </Col>
                    <Col sm={4}>
                        <button type="submit" className="btn btn-block mt-2 mb-4">POST</button>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col>
                    {/* {posts.map(item => { */}
                    <Card className="border-dark" style={{ border: "2px solid black" }}>
                        <Row>
                            <Col sm={4}>
                                {/* <h5 className="m-2">{item.fullname}</h5> */}
                                <h5 className="m-2">NAME</h5>
                                {/* <small className="m-2">{item.date}</small> */}
                                <small className="m-2">DATE</small>
                                {/* <small className="m-2">{item.time}</small> */}
                                <small className="m-2">TIME</small>
                            </Col>
                            <Col sm={8}>
                                {/* <p className="m-2">{item.post}</p> */}
                                <p className="m-2">POST</p>
                            </Col>
                        </Row>
                    </Card>
                {/* })} */}
                </Col>
            </Row>
        </PageContainer>
    );
}

export default MessageBoard;