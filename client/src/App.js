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
import { GroupContextProvider } from './GroupContext';


function App() {
  return (
    <Router>
      <GroupContextProvider>
      <UserContextProvider>
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route path="/home" component={Main} />
          <Route path="/settings" component={Settings} />
          <Route path="/groupinfo" component={GroupInfo} />
          <Route path="/calendar" component={CalendarShare} />
          <Route path="/messageboard" component={MessageBoard} />
          <Route path="/lists" component={Lists} />
          <Route path="/photoalbum" component={PhotoAlbum} />
          
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/newcircle" component={NewCircle} />
          <Route path="/existingcircle" component={ExistingCircle} />
        </Switch>
      </UserContextProvider>
      </GroupContextProvider>
      <Footer />
    </Router>
  );
}

export default App;
