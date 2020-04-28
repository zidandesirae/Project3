import React from 'react';
import Container2 from '../components/Universal/Container2';
import MainSeg from '../components/Main/MainSeg';

function Main(props) {
    return (<div><div id="flip">
        <div><div>life</div></div>
        <div><div>family</div></div>
        <div><div>friends</div></div>
    </div>
        <Container2>
            <MainSeg />
        </Container2>
    </div>
    );
}

export default Main;