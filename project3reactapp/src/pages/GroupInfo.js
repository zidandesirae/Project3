import React from 'react';
import NavBar from '../components/NavBar/Navbar';
import Container2 from '../components/Settings/Container2';
import Col10 from '../components/Settings/Col10';
import TitleH2 from '../components/Settings/TitleH2';
import Card from '../components/Settings/Card';
import GroupSegment from '../components/GroupInfo/GroupSegment'
import MemberSegment from '../components/GroupInfo/MemberSegment';
import Footer from '../components/Footer';

function GroupInfo(props) {
    return (
        <div>
            <NavBar />
            <Container2>
                <Col10>
                    <TitleH2 title="Group Information"/>
                    <Card>
                        <GroupSegment />
                        <GroupSegment />
                        <MemberSegment />
                    </Card>
                </Col10>
            </Container2>
            <Footer />
        </div>
    );
}

export default GroupInfo;