import React, { Component } from 'react';
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css'

const Menu = () => {
  const linkedIn = () => {
    window.open('https://www.linkedin.com/in/mnevarez05/')
  }
  const gitHub = () => {
    window.open('https://github.com/mnevarez01')
  }
  const Resume = () => {
    window.open(Resume)
  }
  return (
    <Router>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol>
            <MDBNav color="blue-gradient" className="font-weight-bold py-4 px-2 mb-4 justify-content-end">
              <MDBNavLink className="white-text justify-content-start" active to="#!">Maria Nevarez</MDBNavLink>
              <hr></hr>
              <MDBNavLink className="white-text" to='https://www.linkedin.com/in/mnevarez05/' onClick={linkedIn}><MDBIcon fab icon="linkedin-in" /></MDBNavLink>
              <MDBNavLink className="white-text" to='https://github.com/mnevarez01' onClick={gitHub}><MDBIcon fab icon="github" /></MDBNavLink>
              <MDBNavLink className="white-text" to="Resume">
                <MDBIcon far icon="file-pdf" />
              </MDBNavLink>
            </MDBNav>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </Router>
  )
}
export default Menu;