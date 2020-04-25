import React from 'react';
import Container2 from './../components/Universal/Container2';
import Col10 from './../components/Universal/Col10';
import TitleH2 from './../components/Universal/TitleH2';
import Card from './../components/Universal/Card';
import TitleH4 from './../components/Universal/TitleH4';
import UserSegment from './../components/Settings/UserSegment';
import Notifications from './../components/Settings/Notifications';
import EditSaveBtns from './../components/Universal/EditSaveBtn';

function Settings(props) {
    return (
        <Container2>
            <Col10>
                <TitleH2 title="Settings" />
                <Card>
                    <TitleH4 title="Personal Information" />
                    <UserSegment />
                    <EditSaveBtns />
                </Card>
                <br />
                <Card>
                    <TitleH4 title="Notifications" />
                    <Notifications />
                    <EditSaveBtns />
                </Card>
            </Col10>
        </Container2>
    );
}

export default Settings;