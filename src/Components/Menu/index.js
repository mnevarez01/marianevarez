import React from 'react';
import { Breadcrumbs, Typography, Link } from '@material-ui/core';
import { Document } from "react-pdf"

const Menu = () => {

  const linkedIn = (e) => {
    window.open('https://www.linkedin.com/in/mnevarez05/')

  }
  const gitHub = (e) => {
    window.open('https://github.com/mnevarez01')
  }



  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="textPrimary" href="/" >
        Maria Nevarez
  </Link>
      <Link color="inherit" href="/linkedin" onClick={linkedIn} >
        Linkedin
  </Link>
      <Link color="inherit" href="/github" onClick={gitHub}>
        Github
  </Link>
      <Typography color="inherit" >Resume</Typography>
    </Breadcrumbs>

  )

}
export default Menu;