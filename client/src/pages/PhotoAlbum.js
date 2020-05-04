import React, { Component } from 'react';
import Container2 from '../components/Universal/Container2';
import TitleH2 from '../components/Universal/TitleH2';
import Col10 from '../components/Universal/Col10';
import NavBar from '../components/Universal/NavBar'; 
import FileUpload from '../components/Other/FileUpload';

class PhotoAlbum extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container2>
                    <Col10>
                        <TitleH2 title="Photo Album" />
                        {<div>"INSERT CONTENT HERE"</div>}
                        <FileUpload/>
                    </Col10>
                </Container2>
            </div>
        );
    }
}

export default PhotoAlbum;