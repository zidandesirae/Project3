import React, { Component } from 'react';
import NavBar from '../components/NavItems/NavBar';
import Card1 from '../components/Universal/Card1';
import FileUpload from '../components/PhotoAlbum/FileUpload';
import { Container, Row, Col } from 'react-bootstrap';

class PhotoAlbum extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container className="pb-4">
                    <Row className="mx-auto">
                        <Col md={10} sm={12} className="mx-auto">
                            <h2 className="text-center mb-4 text-3d">Photo Album</h2>
                            <Card1>
                                <div className="h4 mt-4 text-center">Share your memories!</div>
                                <FileUpload />
                            </Card1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PhotoAlbum;