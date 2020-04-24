//NEED to create variables for all UserSegment and Notifications information

import React from 'react';
import NavBar from '../components/NavBar/Navbar';
import Container2 from '../components/Settings/Container2';
import Col10 from '../components/Settings/Col10';
import TitleH2 from '../components/Settings/TitleH2';
import Card from '../components/Settings/Card';
import TitleH4 from '../components/Settings/TitleH4';
import UserSegment from '../components/Settings/UserSegment';
import Notifications from '../components/Settings/Notifications';
import EditSaveBtns from '../components/Settings/EditSaveBtn';
import Footer from '../components/Footer';

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
                        <Notifications />
                        <Notifications />
                        <Notifications />
                        <Notifications />
                        <EditSaveBtns />
                    </Card>
                </Col10>
            </Container2>
            <Footer />
        </div>
    );
}

export default Settings;