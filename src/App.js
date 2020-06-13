import React, { useState } from 'react';
import './App.css';
import Menu from './Components/Menu'
import Home from './Components/Home'


const App = () => {
  document.title = "Maria Nevarez"
  const [burger, setburgerState] = useState({
    open: "false",
    options: [],
    link: '',
    description: "",
    onClick: (open) => {
      setburgerState({ ...burger, open })
    }
  })
  return (
    <>
      <Menu />
      <Home />
    </>
  );
}

export default App;


