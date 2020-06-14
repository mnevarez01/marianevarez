import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
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
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };


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
                  <MDBNavLink to="/#home" onClick={() => (<Background />)}>Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/#portfolio" onClick={() => <Home />}>Portfolio
                  {/* <Home /> */}
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/#Resume" onClick={() => <Resume />}>Resume
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