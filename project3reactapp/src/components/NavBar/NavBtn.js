import React from "react";
import Main from './../PageBuild/Main';
import Settings from './../PageBuild/Settings';
import GroupInfo from './../PageBuild/GroupInfo';
import Login from './../PageBuild/Login';

const navbtns = [
    {
        id: 1,
        title: "Home",
        route: <Main />
    },
    {
        id: 2,
        title: "Settings",
        route: <Settings />
    },
    {   
        id: 3,
        title: "Group Information",
        route: ""
    },
    {
        id: 4,
        title: "Log Out",
        route: <Login />
    }
];

function NavBtn(props) {
    return (
        navbtns.map(btn => (
            <a className="nav-item nav-link" href="#" onClick={btn.route} key={btn.id}>{btn.title}</a>
        ))
    );
}

export default NavBtn;