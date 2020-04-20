//NEED to create variables for all UserSegment and NotsSegment information

import React from 'react';
import NavBar from './../NavBar/NavBar';
import Container2 from './../Container2';
import Col10 from './../Col10';
import TitleH2 from './../TitleH2';
import Card from './../Card';
import TitleH4 from '../Settings/TitleH4';
import UserSegment from './../Settings/UserSegment';
import NotsSegment from './../Settings/NotsSegment';
import EditSaveBtns from './../EditSaveBtn';
import Footer from './../Footer';

function Settings(props) {
    return (
        <div>
            <NavBar />
            <Container2>
                <Col10>
                    <TitleH2 title="Settings"/>
                    <Card>
                        <TitleH4 title="Personal Information"/>
                        <UserSegment />
                        <UserSegment />
                        <UserSegment />
                        <UserSegment />
                        <UserSegment />
                        <EditSaveBtns />
                    </Card>
                    <br />
                    <Card>
                        <TitleH4 title="Notifications" />
                        <NotsSegment />
                        <NotsSegment />
                        <NotsSegment />
                        <NotsSegment />
                        <EditSaveBtns />
                    </Card>
                </Col10>
            </Container2>
            <Footer />
        </div>
    );
}

export default Settings;