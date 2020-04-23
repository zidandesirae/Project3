import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Container2 from '../components/GroupInfo/Container2';
import Col10 from '../components/GroupInfo/Col10';
import TitleH2 from '../components/GroupInfo/TitleH2';
import Card from '../components/GroupInfo/Card';
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