import React from "react";

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
        route: '/login'
    }
];

function NavBtns(props) {
    return (
        navbtns.map(btn => (
            <a className="nav-item nav-link" href={btn.route} key={btn.id}>{btn.title}</a>
        ))
    );
}

export default NavBtns;