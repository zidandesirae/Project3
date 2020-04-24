import React from 'react';
import NavBar from './../components/NavBar/NavBar';
import Container2 from './../components/Calendar/Container2';
import TitleH2 from './../components/Calendar/TitleH2'
import Col10 from './../components/Calendar/Col10';
import Footer from './../components/Footer';

function Calendar(props) {
    return (
        <div>
            <NavBar />
            <Container2>
                <Col10>
                    <TitleH2 title="Calendar"/>
                    {/* enter calendar code here*/}
                </Col10>
            </Container2>
            <Footer />
        </div>
    );
}

export default Calendar;