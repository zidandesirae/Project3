import React from 'react';
import Container2 from '../components/Universal/Container2';
import Col10 from '../components/Universal/Col10';
import TitleH2 from '../components/Universal/TitleH2';
import Card1 from '../components/Universal/Card1';
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
                    <Card1>
                        <GroupName />
                        <GroupID />
                        <MemberSegment title="Group Members:" />
                    </Card1>
                </Col10>
            </Container2>
        </div>
    );
}

export default GroupInfo;