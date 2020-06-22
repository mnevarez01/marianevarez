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
    <>
      <Nav />
      <Background />
      <Home />
    </>


  );
}

export default App;


