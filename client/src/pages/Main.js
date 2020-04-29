import React from 'react';
import Container2 from '../components/Universal/Container2';
import MainSeg from '../components/Main/MainSeg';
import NavBar from '../components/Universal/NavBar';

function Main(props) {
    return (<div><NavBar />
        <Container2>
        <div className="bodyTextScroll" id="containerHead">
            Stay
        <div id="flip">
                <div><div>organized</div></div>
                <div><div>in the loop</div></div>
                <div><div>connected</div></div>
            </div>
        </div>
        
            <MainSeg />
        </Container2>
    </div>
    );
}

export default Main;