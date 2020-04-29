import React from 'react';
import { Link } from "react-router-dom";

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
            <div class="col-6 p-4">
            <Link to={item.route}>
                <div className="card">
                    <div className="card-body">
                        <img src={item.img} alt={item.alt} key={item.id} className="img-fluid" />
                    </div>
                </div>
            </Link>
        </div>
    
        ))
    );
}

export default MainSeg;
