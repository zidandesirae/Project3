import React from 'react';
import NavBar from '../NavBar/NavBar';
import Container2 from './../Container2';
import TitleH2 from './../TitleH2'
import Col10 from './../Col10';
import Footer from './../Footer';

function Calendar(props) {
    return (
        <div>
            <NavBar />
            <Container2>
                <TitleH2 title="Calendar"/>
                <Col10>
                {/* enter calendar code here*/}
                </Col10>
            </Container2>
            <Footer />
        </div>
    );
}

export default Calendar;