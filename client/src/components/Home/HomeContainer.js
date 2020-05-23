import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Container, Row } from 'react-bootstrap';

function Home(props) {
    return (
        <div>
            <Navbar />
            <Container className="pb-4">
                <Row className="mx-auto">
                    <div className="bodyTextScroll" id="containerHead">
                        <h1>STAY</h1>
                        <div id="flip">
                            <div><div>ORGANIZED</div></div>
                            <div><div>IN THE LOOP</div></div>
                            <div><div>CONNECTED</div></div>
                        </div>
                    </div>
                    {props.children}
                </Row>
            </Container>
        </div>
    );
}

export default Home;