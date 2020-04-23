// PROPS.CHILDREN - inserts LoginForm.js or SignUpForm.js to complete the page
// See src -> components -> PageBuild -> for <Login /> & <SignUp />

import React from "react";
import Container1 from './Container1';
import TitleH1 from './TitleH1';
import Card from './Card';

function Outer(props) {
    return (
        <Container1>
            <TitleH1 title="Some Family App Name" subtitle="MAKE YOUR LIFE MORE SIMPLE"/>
                <Card>
                    {props.children}
                </Card>
        </Container1>
    );
}

export default Outer;