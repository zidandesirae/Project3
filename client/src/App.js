import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';
import Settings from "./pages/Settings";
import GroupInfo from './pages/GroupInfo';
import Footer from './components/Universal/Footer';
import CalendarShare from './pages/CalendarShare';
import Dashboard from './pages/Dashboard';
import Lists from './pages/Lists';
import PhotoAlbum from './pages/PhotoAlbum';
import SignUp from './pages/SignUp';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NewLandingPage from './pages/NewLanding';
import CreateNewGroup from './pages/CreateNewGroup';
import ExistingGroup from './pages/ExistingGroup';


function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/"><Login /></Route> */}
        <Route path="/home"><Main /></Route>
        <Route path="/settings"><Settings /></Route>
        <Route path="/groupinfo"><GroupInfo /></Route>
        <Route path="/calendar"><CalendarShare /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/lists"><Lists /></Route>
        <Route path="/photoalbum"><PhotoAlbum /></Route>
        
        <Route exact path="/"><NewLandingPage /></Route>
        <Route path="/signup"><SignUp /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/newcircle"><CreateNewGroup /></Route>
        <Route path="/existingcircle"><ExistingGroup /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
