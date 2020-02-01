import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


class Header extends Component {
  render() {
    return (
  <header>
     <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Logo</Navbar.Brand>
        <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link to="/">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link to="/about">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/users">
              <Nav.Link to="/users">Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/test">
              <Nav.Link to="/test">Test</Nav.Link>
            </LinkContainer>
        </Nav>
      </Navbar>
  </header>
    );
  }
}

export default Header;
