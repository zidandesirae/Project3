import React from 'react';
import Container2 from '../components/Universal/Container2';
import Segment from '../components/Main/Segment';
import CalendarShare from './CalendarShare';
import Dashboard from './Dashboard';
import Lists from './Lists';
import PhotoAlbum from './PhotoAlbum';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Main(props) {
    return (
        <Router>
            <Switch>
            <Container2>
                <Segment />
                <Route path="/calendar"><CalendarShare /></Route>
                <Route path="/dashboard"><Dashboard /></Route>
                <Route path="/lists"><Lists /></Route>
                <Route path="/photos"><PhotoAlbum /></Route>
            </Container2>
            </Switch>
        </Router>
    );
}

export default Main;