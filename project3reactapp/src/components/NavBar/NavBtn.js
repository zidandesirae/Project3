import React from "react";
import Main from './../PageBuild/Main';
import Settings from './../PageBuild/Settings';
import GroupInfo from './../PageBuild/GroupInfo';
import Login from './../PageBuild/Login';

const navbtns = [
    {
        id: 1,
        title: "Home",
    },
    {
        id: 2,
        title: "Settings",
    },
    {   
        id: 3,
        title: "Group Information",
    },
    {
        id: 4,
        title: "Log Out",
    }
];

function NavBtn(props) {
    return (
        navbtns.map(btn => (
            <a className="nav-item nav-link" href="#">{btn.title}</a>
        ))
    );
}

export default NavBtn;