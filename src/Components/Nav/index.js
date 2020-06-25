import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Breadcrumbs } from '@material-ui/core'
import Home from '../Home'
import Background from '../Background'
import Resume from '../Resume'
// import './style.css'

const useStyles = makeStyles((theme) => ({
  text: {
    flexGrow: 1,
    color: "#000000",
    backgroundColor: "#599ba3",
    height: 80,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: -8,
    marginRight: -16,
    marginLeft: -16,
    marginBottom: -8,
    position: "fixed",
    top: 0,

  }
}));

const Nav = () => {
  const classes = useStyles();

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
    <div className='bar'>
      <Breadcrumbs className={classes.text} aria-label="breadcrumb">
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
    </div>

  )

}

export default Nav;