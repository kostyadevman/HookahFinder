import React, { Component } from 'react';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const pic = {
  width: '100%',
  height: '200px'
};

const navBar = {
    background: 'pink'
}

const navItem = {
    // width: '20%'
}

class Header extends Component {
  render() {
    return (
  <div>
      <div style={pic}>
          <h1>Header ( Title & Logo )</h1>
      </div>
      <Navbar style={navBar}  variant="white">
        <Container>
        <Row>
          <Col>
              <Navbar expand="lg" >
                <Navbar.Brand href="#">Москва</Navbar.Brand>
              </Navbar>
          </Col>
          <Col>
            <Nav  className="pills">
            <LinkContainer style={navItem} to="/">
              <Nav.Link  to="/">Каталог</Nav.Link>
            </LinkContainer>
            <LinkContainer style={navItem} to="/map">
              <Nav.Link to="/map">Карта</Nav.Link>
            </LinkContainer>
            <LinkContainer style={navItem} to="/users">
              <Nav.Link to="#">Блог</Nav.Link>
            </LinkContainer>
            <LinkContainer  style={navItem} to="/about">
              <Nav.Link to="/about">О нас</Nav.Link>
            </LinkContainer>
        </Nav>
          </Col>
      </Row>
        </Container>

      </Navbar>


  </div>
    );
  }
}

export default Header;
