import React from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import Home from '../Home'
import Background from '../Background'
import Resume from '../Resume'

const Nav = () => {


  const renderHome = (routerProps) => {
    return <Home />
  }

  const renderBackground = (routerProps) => {
    return <Background />
  }

  const renderResume = (routerProps) => {
    return <Resume />
  }



  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" onClick={renderHome}>
          Home
  </Link>
        <Link color="inherit" to="/portfolio" onClick={renderBackground}>
          Portfolio
  </Link>
        <Link color="inherit" to="/resume" onClick={renderResume}>
          Resume
  </Link>
      </Breadcrumbs>
    </>

  )

}

export default Nav;