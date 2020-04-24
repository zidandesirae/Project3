import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';
import Settings from "./pages/Settings";
import GroupInfo from './pages/GroupInfo';
import NavBar from '../src/components/Universal/NavBar';
import Footer from '../src/components/Universal/Footer';
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
        <Route exact path="/home"><Main /></Route>
        <Route path="/settings"><Settings /></Route>
        <Route path="/groupinfo"><GroupInfo /></Route>
        <Route path="/login"><Login /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
