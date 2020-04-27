import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';
import Settings from "./pages/Settings";
import GroupInfo from './pages/GroupInfo';
import NavBar from '../src/components/Universal/NavBar';
import Footer from '../src/components/Universal/Footer';
import CalendarShare from './pages/CalendarShare';
import Dashboard from './pages/Dashboard';
import Lists from './pages/Lists';
import PhotoAlbum from './pages/PhotoAlbum';
import SignUp from './pages/SignUp';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/* in the navbar */}
        <Route exact path="/home"><Main /></Route>
        <Route path="/settings"><Settings /></Route>
        <Route path="/groupinfo"><GroupInfo /></Route>
        <Route path="/login"><Login /></Route>

        {/* on the main page  */}
        <Route path="/calendar"><CalendarShare /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/lists"><Lists /></Route>
        <Route path="/photoalbum"><PhotoAlbum /></Route>
        
        {/* on the log in page  */}
        <Route path="/signup"><SignUp /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
