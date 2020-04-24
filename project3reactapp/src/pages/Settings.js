//NEED to create variables for all UserSegment and Notifications information

import React from 'react';
<<<<<<< HEAD:project3reactapp/src/components/PageBuild/Settings.js
=======
<<<<<<< HEAD:project3reactapp/src/components/PageBuild/Settings.js
>>>>>>> c3cfcb8fa3a7b65f7a43c1bbbb03627c28779730:project3reactapp/src/pages/Settings.js
import NavBar from '../NavBar/NavBar';
import Container2 from './../Container2';
import Col10 from './../Col10';
import TitleH2 from './../TitleH2';
import Card from './../Card';
import TitleH4 from '../Settings/TitleH4';
import UserSegment from './../Settings/UserSegment';
import NotsSegment from './../Settings/NotsSegment';
import EditSaveBtns from './../EditSaveBtn';
import Footer from './../Footer';
=======
import NavBar from './../components/NavBar/NavBar';
import Container2 from './../components/Settings/Container2';
import Col10 from './../components/Settings/Col10';
import TitleH2 from './../components/Settings/TitleH2';
import Card from './../components/Settings/Card';
import TitleH4 from './../components/Settings/TitleH4';
import UserSegment from './../components/Settings/UserSegment';
import Notifications from './../components/Settings/Notifications';
import EditSaveBtns from './../components/Settings/EditSaveBtn';
import Footer from './../components/Footer';
>>>>>>> da1c638f7093080b34e77ce17f3fdad504a5944d:project3reactapp/src/pages/Settings.js

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