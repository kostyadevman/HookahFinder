import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import HeaderImg from 'assets/img/header_img.png';
import Routes from 'config/routes';

// TODO
// 1. fonts include?

const headerTop = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${HeaderImg})`
};

const headerTopInner = {
  paddingBottom: '3rem',
  paddingTop: '3rem',
  position: 'relative',
  alignItems: 'center',
  display: 'flex'
};

const HeaderTopH1 = {
  color: '#ffffff',
  textAlign: 'center',
  fontFamily: '"Poiret One", cursive'
};

const headerTopP1 = {
  color: '#ffffff',
  textAlign: 'center',
  fontWeight: '300'
};

const containerMenu = {
  background: '#64247F'
};

const navBar = {
  height: '100%',
  background: '#64247F',
  padding: 0
};

@withTranslation()
class Header extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;
    return (
      <>
        <Container fluid style={headerTop}>
          <Row>
            <Container style={headerTopInner}>
              <Col>
                <h1 style={HeaderTopH1}>{t('Header.Title')}</h1>
                <p style={headerTopP1}>{t('Header.Description')}</p>
              </Col>
            </Container>
          </Row>
        </Container>
        <Container fluid style={containerMenu}>
          <Row>
            <Container>
              <Navbar collapseOnSelect expand='sm' variant='dark' style={navBar}>
                <Navbar.Brand href='#'>Москва</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='mr-auto' variant='pills' as='ul' defaultActiveKey={0}>
                    <Nav.Item as='li'>
                      <Nav.Link eventKey={0} as={Link} to={Routes.Root}>{t('Menu.Catalog')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                      <Nav.Link eventKey={1} as={Link} to={Routes.Map}>{t('Menu.Map')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                      <Nav.Link eventKey={2} as={Link} to={Routes.Blog}>{t('Menu.Blog')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                      <Nav.Link eventKey={3} as={Link} to={Routes.About}>{t('Menu.About')}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Navbar.Brand href='#'>Вход</Navbar.Brand>
                </Navbar.Collapse>
              </Navbar>
            </Container>
          </Row>
        </Container>
      </>
    );
  }
}

export default Header;
