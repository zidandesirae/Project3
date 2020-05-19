import React from 'react';
import PageContainer from '../components/General/PageContainer'
import MessageBoardSetup from '../components/MessageBoard/MessageBoardSetup';
import Store from '../components/MessageBoard/Store';

function MessageBoard() {
    return (
        <PageContainer>
            <Store>
                <MessageBoardSetup />
            </Store>
        </PageContainer>
    );
}

export default MessageBoard;