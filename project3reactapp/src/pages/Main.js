import React from 'react';
import Container2 from '../components/Universal/Container2';
import MainSeg from '../components/Main/MainSeg';
import NavBar from '../components/Universal/NavBar';

function Main(props) {
    return (
        <div>
            <NavBar />
            <Container2>
                <MainSeg />
            </Container2>
        </div>
    );
}

export default Main;