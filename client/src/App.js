import React from 'react';
import Landing from './pages/Landing';
import NewCircle from './pages/NewCircle';
import ExistingCircle from './pages/ExistingCircle';
import Login from './components/LandingPage/Login';
import SignUp from './components/LandingPage/SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/Main';
import Settings from "./pages/Settings";
import GroupInfo from './pages/GroupInfo';
import Footer from './components/Universal/Footer';
import './App.css';
import CalendarShare from './pages/CalendarShare';
import MessageBoard from './pages/MessageBoard';
import Lists from './pages/Lists';
import PhotoAlbum from './pages/PhotoAlbum';
import { UserContextProvider } from './UserContext';


function App() {
  return (
    <Router>
      <UserContextProvider>
        <Route exact path="/"><Landing /></Route>
        <Switch>
          <Route path="/home"><Main /></Route>
          <Route path="/settings"><Settings /></Route>
          <Route path="/groupinfo"><GroupInfo /></Route>
          <Route path="/calendar"><CalendarShare /></Route>
          <Route path="/messageboard"><MessageBoard /></Route>
          <Route path="/lists"><Lists /></Route>
          <Route path="/photoalbum"><PhotoAlbum /></Route>

          <Route path="/signup"><SignUp /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/newcircle"><NewCircle /></Route>
          <Route path="/existingcircle"><ExistingCircle /></Route>
        </Switch>
      </UserContextProvider>
      <Footer />
    </Router>
  );
}

export default App;
