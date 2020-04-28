import React from 'react';
import Container2 from '../components/Universal/Container2';
import MainSeg from '../components/Main/MainSeg';

function Main(props) {
    return (<div>
        <div id="containerHead">
  Stay 
  <div id="flip">
        <div><div>organized</div></div>
        <div><div>in the loop</div></div>
        <div><div>connected</div></div>
    </div>
    </div>
        <Container2>
            <MainSeg />
        </Container2>
    </div>
    );
}

export default Main;