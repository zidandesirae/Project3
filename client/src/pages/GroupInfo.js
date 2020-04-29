import React from 'react';
import Container2 from '../components/Universal/Container2';
import Col10 from '../components/Universal/Col10';
import TitleH2 from '../components/Universal/TitleH2';
import Card from '../components/Universal/Card';
import GroupName from '../components/GroupInfo/GroupName';
import GroupID from '../components/GroupInfo/GroupID';
import MemberSegment from '../components/GroupInfo/MemberSegment';
import NavBar from '../components/Universal/NavBar';

function GroupInfo(props) {
    return (
        <div>
            <NavBar />
            <Container2>
                <Col10>
                    <TitleH2 title="Group Information" />
                    <Card>
                        <GroupName />
                        <GroupID />
                        <MemberSegment title="Group Members:" />
                    </Card>
                </Col10>
            </Container2>
        </div>
    );
}

export default GroupInfo;