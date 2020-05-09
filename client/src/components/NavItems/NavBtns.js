import React from "react";
import { Link } from 'react-router-dom';

const navbtns = [
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
        title: "Group Information",
        route: '/groupinfo'
    },
    {
        id: 4,
        title: "Log Out",
        route: '/'
    }
];

function NavBtns(props) {

    return (
        navbtns.map(btn => (
            <Link to={btn.route} className="nav-item nav-link"  key={btn.id}>{btn.title}</Link>
        ))
    );
}

export default NavBtns;