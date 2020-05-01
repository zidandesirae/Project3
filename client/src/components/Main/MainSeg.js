import React from 'react';
import { Link } from "react-router-dom";

// INSERT IMAGES 
const eachSeg = [
    {
        id: 1,
        img: "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg",
        alt: "calendar",
        route: '/calendar',
        className: "far fa-calendar-alt text-3d-iconSizing",
        heading: "Calendar"
    },
    {
        id: 2,
        img: "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg",
        alt: "dashboard",
        route: '/dashboard',
        className: "far fa-comment-dots text-3d-iconSizing",
        heading: "Chat"

    },
    {
        id: 3,
        img: "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg",
        alt: "lists",
        route: '/lists',
        className: "fas fa-list-ol text-3d-iconSizing",
        heading: "Lists"

    },
    {
        id: 4,
        img: "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg",
        alt: "photos",
        route: '/photoalbum',
        className: "far fa-image text-3d-iconSizing",
        heading: "Photos"

    }
];

function MainSeg(props) {
    return (
        eachSeg.map(item => (
            <div class="col-6 p-4">
            <Link to={item.route}>
                <div className="card">
                    <div className="card-body text-center">
                        
                        <i className={item.className}></i>
                    </div>
                </div>
            </Link>
        </div>
    
        ))
    );
}

export default MainSeg;
