import React, { useState } from 'react';
import './App.css';
import Menu from './Components/Menu'
import Home from './Components/Home'
import About from './Components/About'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const App = () => {
  document.title = "Maria Nevarez"


  return (
    <div>
      <Menu />
      <About />
      <Home />
    </div>
  );
}

export default App;


