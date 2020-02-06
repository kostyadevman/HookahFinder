import React, { Component } from 'react';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import HeaderImg from '../../assets/img/header_img.png'


const pic = {
  width: '100%',
  height: '192px',
  backgroundImage: `url(${HeaderImg})`
};

const navBar = {
  height: '90px',
  background: '#64247F',
}

const navItem = {
    // width: '200%'
}

class Header extends Component {
  render() {
    return (
  <div>
      <div style={pic}>
          <h1>Header ( Title & Logo )</h1>
      </div>
      <Navbar style={navBar}  variant="dark">
        <Container>
        <Row>
          <Col>
              <Navbar expand="lg" >
                <Navbar.Brand href="#">Москва</Navbar.Brand>
              </Navbar>
          </Col>
          <Col xs={3}>
            <Nav  className="pills">
            <LinkContainer style={navItem} to="/">
              <Nav.Link  to="/">КАТАЛОГ</Nav.Link>
            </LinkContainer>
            <LinkContainer style={navItem} to="/map">
              <Nav.Link to="/map">КАРТА</Nav.Link>
            </LinkContainer>
            <LinkContainer style={navItem} to="/users">
              <Nav.Link to="#">БЛОГ</Nav.Link>
            </LinkContainer>
            <LinkContainer  style={navItem} to="/about">
              <Nav.Link to="/about">О НАС</Nav.Link>
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
