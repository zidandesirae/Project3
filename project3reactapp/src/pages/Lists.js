import React, { Component } from 'react';
import Container2 from '../components/Universal/Container2';
import TitleH2 from '../components/Universal/TitleH2';
import Col10 from '../components/Universal/Col10';

class Lists extends Component {
    render() {
        return (
            <div>
                <Container2>
                    <Col10>
                    <TitleH2 title="Lists" />
                        {<div>"INSERT"</div>}
                    </Col10>
                </Container2>
            </div>
        );
    }
}

export default Lists;