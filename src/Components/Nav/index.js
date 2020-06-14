import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
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
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );



    return (

      <Router>
        <div>
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
    )
  }
}

export default Nav;