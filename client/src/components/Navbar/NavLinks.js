import React from "react";
import { Link } from 'react-router-dom';

function NavLinks(props) {

    const links = [
        {
            id: 1,
            title: "Home",
            route: '/home'
        },
        {
            id: 2,
            title: "Settings",
            route: '/settings'
        },
        {
            id: 3,
            title: "Circle Information",
            route: '/groupinfo'
        },
        {
            id: 4,
            title: "Log Out",
            route: '/'
        }
    ];

    return (
        links.map(item => (
            <Link 
                to={item.route} 
                className="nav-item nav-link" 
                key={item.id}>
                    {item.title}
            </Link>
        ))
    );
}

export default NavLinks;