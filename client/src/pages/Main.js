import React, { useContext } from 'react';
import Card1 from '../components/Universal/Card1';
import NavBar from '../components/NavItems/NavBar';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
// import { UserContext } from '../../UserContext';

function Main(props) {

    const eachSeg = [
    {
        id: 1,
        route: '/calendar',
        className: "far fa-calendar-alt text-3d-iconSizing p-3",
        heading: "Calendar"
    },
    {
        id: 2,
        route: '/messageboard',
        className: "far fa-comment-dots text-3d-iconSizing p-3",
        heading: "Message Board"

    },
    {
        id: 3,
        route: '/lists',
        className: "fas fa-list-ol text-3d-iconSizing p-3",
        heading: "Lists"

    },
    {
        id: 4,
        route: '/photoalbum',
        className: "far fa-image text-3d-iconSizing p-3",
        heading: "Photos"

    }
];


    return (
        <div>
            <NavBar />
            <Container className="pb-4">
                <Row className="mx-auto">
                    <div className="bodyTextScroll" id="containerHead">
                        <h1>STAY</h1>
                        <div id="flip">
                            <div><div>ORGANIZED</div></div>
                            <div><div>IN THE LOOP</div></div>
                            <div><div>CONNECTED</div></div>
                        </div>
                    </div>
                    {eachSeg.map(item => (
                        <Col md={6} sm={12} className="p-4" key={item.id}>
                            <Link to={item.route} className="text-center" style={{ textDecoration: "none" }}>
                                <Card1>
                                    <h1 className="heading-text">{item.heading}</h1>
                                    <i className={item.className}></i>
                                </Card1>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Main;