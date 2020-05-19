import React from 'react';
import { Link } from "react-router-dom";
import Card1 from '../General/Card1';
import { Col } from 'react-bootstrap';

function Segments(props) {

    const segments = [
        {
            id: 1,
            title: "Calendar",
            className: "far fa-calendar-alt text-3d-iconSizing p-3",
            route: '/calendar'
        },
        {
            id: 2,
            title: "Message Board",
            className: "far fa-comment-dots text-3d-iconSizing p-3",
            route: '/messageboard'

        },
        {
            id: 3,
            title: "Lists",
            className: "fas fa-list-ol text-3d-iconSizing p-3",
            route: '/lists'

        },
        {
            id: 4,
            title: "Photos",
            className: "far fa-image text-3d-iconSizing p-3",
            route: '/photos'

        }
    ];

    return (
        segments.map(item => (
            <Col md={6} sm={12} className="p-4" key={item.id}>
                <Link to={item.route} className="text-center" style={{ textDecoration: "none" }}>
                    <Card1>
                        <h1 className="title-text text-body">{item.title}</h1>
                        <i className={item.className}></i>
                    </Card1>
                </Link>
            </Col>
        ))
    );
}

export default Segments;