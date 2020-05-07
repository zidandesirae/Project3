import React from 'react';
import Container2 from '../components/Universal/Container2';
import TitleH2 from '../components/Universal/TitleH2';
import Col10 from '../components/Universal/Col10';
import NavBar from '../components/Universal/NavBar';
import MessageBoardSetup from '../components/MessageBoard/MessageBoardSetup';
import Store from '../components/MessageBoard/Store';

function MessageBoard() {
    return (
        <div>
            <NavBar />
            <Container2>
                <Col10>
                    <TitleH2 title="Message Board" />
                    <Store>
                        <MessageBoardSetup />
                    </Store>
                </Col10>
            </Container2>
        </div>
    );
}

export default MessageBoard;