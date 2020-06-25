import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Breadcrumbs, Typography } from '@material-ui/core'
import { spacing } from '@material-ui/system';
import Home from '../Home'
import Background from '../Background'
import Resume from '../Resume'
// import './style.css'

const useStyles = makeStyles((theme) => ({

  text: {
    backgroundColor: "#50b6bb",
    height: 60,
    paddingTop: 5,
    paddingBottom: 5,
    position: 'relative',
    top: 0,

  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "#ffffff",
    fontSize: 40,
    fontFamily: "Codystar",


    [theme.breakpoints.down('sm')]: {
      display: "none"
    }

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
    <div >
      <Breadcrumbs mx="auto" className={classes.text} >
        <Link to="/" color='primary' onClick={renderHome}>
          Home
  </Link>
        <Link color='primary' to="/portfolio" onClick={renderBackground}>
          Portfolio
  </Link>
        <Link color="primary" to="/resume" onClick={renderResume}>
          Resume
  </Link>
        <Typography variant="h4" className={classes.title}>
          Maria Nevarez
          </Typography>
      </Breadcrumbs>
    </div >

  )

}

export default Nav;