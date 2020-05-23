import React from 'react';

import Landing from './pages/Landing/Landing';
import NewCircle from './pages/Landing/NewCircle';
import ExistingCircle from './pages/Landing/ExistingCircle';
import Login from './pages/Landing/Login';
import SignUp from './pages/Landing/SignUp';
import Settings from "./pages/Navbar/Settings";
import GroupInfo from './pages/Navbar/GroupInfo';
import Home from './pages/Home';
import CalendarShare from './pages/CalendarShare';
import MessageBoard from './pages/MessageBoard';
import Lists from './pages/Lists';
import Photos from './pages/Photos';
import Footer from './components/General/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContextProvider } from './utils/UserContext';
import { GroupContextProvider } from './utils/GroupContext';


function App() {
  return (
    <Router>
      <UserContextProvider>
      <GroupContextProvider>
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/newcircle" component={NewCircle} />
          <Route path="/existingcircle" component={ExistingCircle} />
          <Route path="/home" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/groupinfo" component={GroupInfo} />
          <Route path="/calendar" component={CalendarShare} />
          <Route path="/messageboard" component={MessageBoard} />
          <Route path="/lists" component={Lists} />
          <Route path="/photos" component={Photos} />
        </Switch>
      </GroupContextProvider>
      </UserContextProvider>
      <Footer />
    </Router>
  );
}

export default App;
