//NEED to get each segment directed correcty and photo added
//ADD href and image for each segment

import React from 'react';
import NavBar from '../components/NavBar/Navbar';
import Container2 from '../components/Settings/Container2';
import Segment from '../components/Main/Segment';
import Footer from '../components/Footer';

function Main(props) {
    return (
        <div>
            <NavBar />
            <Container2>
                <Segment /* To Calander Page and add specific cover image*//>
                <Segment /* To Dashboard Page and add specific cover image *//>
                <Segment /* To Lists Page and add specific cover image *//>
                <Segment /* To Photo Album Page and add specific cover image *//>
            </Container2>
            <Footer />
        </div>
    );
}

export default Main;