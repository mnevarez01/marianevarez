import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Home"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import "./style.css";

class Background extends React.Component {
  state = {
    collapsed: false
  };
  linkedIn = () => {
    window.open('https://www.linkedin.com/in/mnevarez05/')
  }
  gitHub = () => {
    window.open('https://github.com/mnevarez01')
  }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <Router>
          <div>
            <MDBNavbar
              color="primary-color"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">Maria Nevarez</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Portfolio</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Resume</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      About Me:
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      I recently acquired a certification in Full Stack Web Development from the University of
                      Denver with skills in JavaScript, CSS, React.js, MongoDB, Nodejs., and MySQL. Known as problem-solver,
                      task-orientated and great collaborator. I aim to create a great user experience by creating great
                      user-driven websites as well as using back-end servers to optimize use. Recent projects have led me to
                      create a user-friendly app to research weather in multiple cities. The fast pace of the certification
                      process has set me up to deal with the fast and ever-changing technology field. Excited to use my time
                      management, dedication and eye for detail to ensure that creating an excellent user experience.
                    </h6>
                    <MDBBtn color="white" onClick={this.linkedIn}>LinkedIn</MDBBtn>
                    <MDBBtn outline color="white" onClick={this.gitHub}>
                      Github
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src="https://i.imgur.com/z3qqizQ.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Background;