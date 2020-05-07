import React from 'react';
import { Link } from "react-router-dom";

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

function MainSeg(props) {
    return (
        eachSeg.map(item => (
            <div className="col-md-6 col-sm-12 p-4" key={item.id}>
            <Link to={item.route} style={{textDecoration: "none"}}>
                <div className="card card1">
                    <div className="card-body card-body1 text-center">
                        <h1 className="heading-text">{item.heading}</h1>
                        <i className={item.className}></i>
                    </div>
                </div>
            </Link>
        </div>
    
        ))
    );
}

export default MainSeg;
