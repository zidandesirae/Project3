import React from 'react';
import { Link } from "react-router-dom";

// INSERT IMAGES 
const eachSeg = [
    {
        id: 1,
        img: "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg",
        alt: "calendar",
        route: '/calendar'
    },
    {
        id: 2,
        img: "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg",
        alt: "dashboard",
        route: '/dashboard'
    },
    {
        id: 3,
        img: "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg",
        alt: "lists",
        route: '/lists'
    },
    {
        id: 4,
        img: "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg",
        alt: "photos",
        route: '/photoalbum'
    }
];

function MainSeg(props) {
    return (
        eachSeg.map(item => (
            <div className="col-6 p-4" key={item.id}>
            <Link to={item.route}>
                <div className="card card1">
                    <div className="card-body card-body1">
                        <img src={item.img} alt={item.alt} className="img-fluid" />
                    </div>
                </div>
            </Link>
        </div>
    
        ))
    );
}

export default MainSeg;
