import React from 'react';
import Container2 from '../components/Universal/Container2';
import MainSeg from '../components/Main/MainSeg';
import NavBar from '../components/Universal/NavBar';
import TitleMainPage from '../components/Main/TitleMainPage';

function Main(props) {
    return (<div>
        <NavBar />
        <Container2>
            <TitleMainPage />
            <MainSeg />
        </Container2>
    </div>
    );
}

export default Main;