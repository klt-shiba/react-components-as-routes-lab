import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';
// import { actors } from '../data';


const App = (props) => {
  return (
    <Router>
      <div>
          <NavBar/>
          <Route exact path="/directors" component={Directors}/>
          <Route exact path="/movies" component={Movies}/>
          <Route exact path="/actors" component={Actors}/>
          <Route path="/" component={Home}/>
        </div>
    </Router>
  );
};

export default App
