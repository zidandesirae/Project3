import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';
import Settings from "./pages/Settings";
import GroupInfo from './pages/GroupInfo';
import Footer from './components/Universal/Footer';
import CalendarShare from './pages/CalendarShare';
import MessageBoard from './pages/MessageBoard';
import Lists from './pages/Lists';
import PhotoAlbum from './pages/PhotoAlbum';
import SignUp from './pages/SignUp';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from './pages/Landing';
import NewCircle from './pages/NewCircle';
import ExistingCircle from './pages/ExistingCircle';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home"><Main /></Route>
        <Route path="/settings"><Settings /></Route>
        <Route path="/groupinfo"><GroupInfo /></Route>
        <Route path="/calendar"><CalendarShare /></Route>
        <Route path="/messageboard"><MessageBoard /></Route>
        <Route path="/lists"><Lists /></Route>
        <Route path="/photoalbum"><PhotoAlbum /></Route>
        
        <Route exact path="/"><Landing /></Route>
        <Route path="/signup"><SignUp /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/newcircle"><NewCircle /></Route>
        <Route path="/existingcircle"><ExistingCircle /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
