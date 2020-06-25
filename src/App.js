import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home'
import Nav from './Components/Nav'
import Background from './Components/Background'
import Resume from './Components/Resume'


const App = () => {
  document.title = "Maria Nevarez"
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/portfolio'>
          <Home />
        </Route>
        <Route exact path='/resume'>
          <Resume />
        </Route>
        <Route path='/'>
          <Background />
        </Route>
      </Switch>
      <Home />
    </Router>



  );
}

export default App;


