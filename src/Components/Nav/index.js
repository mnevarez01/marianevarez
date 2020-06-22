import React from 'react';
import { BrowserRouter as Router, useHistory as history } from 'react-router-dom'
import Background from '../Background'
import Resume from '../Resume'
import Home from '../Home'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from "mdbreact";



class Nav extends React.Component {
  // history = useHistory();
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleHome = () => {

    history.pushState("/Home")
  }

  render() {
    // const location = useLocation();
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );

    return (
      <Router>
        <MDBNavbar
          color="blue accent-4"
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
                <MDBNavItem >
                  <MDBNavLink to="/home" onClick={this.handleHome}>Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/portfolio">Portfolio
                  {/* <Home /> */}
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/Resume" >Resume
                  {/* <Resume/> */}
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {this.state.collapsed && overlay}
      </Router>

    )
  }
}

export default Nav;