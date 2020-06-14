import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home'
import Nav from './Components/Nav'
import Background from './Components/Background'
import Resume from './Components/Resume'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const App = () => {
  document.title = "Maria Nevarez"


  return (
    <Router>


      <div>
        <Switch>
          <Route exact path='/#home'>
            <Background />
          </Route>
          <Route exact path='/#portfolio'>
            <Home />
          </Route>
          <Route exact path='/#Resume'>
            <Resume />
          </Route>

        </Switch>

        <Nav />
        <Background />
        <Home />
      </div>
    </Router>

  );
}

export default App;


