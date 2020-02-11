import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withTranslation } from 'react-i18next';

import HeaderImg from 'assets/img/header_img.png';
import Routes from 'config/routes';

// TODO
// 1. fonts include?

const headerTop = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${HeaderImg})`,
};

const headerTopInner = {
  paddingBottom: '3rem',
  paddingTop: '3rem',
  position: 'relative',
  alignItems: 'center',
  display: 'flex',
};

const HeaderTopH1 =  {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: '"Poiret One", cursive',
};

const headerTopP1 = {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '300',
}

const pic = {
  width: '100%',
  height: '192px',
  backgroundImage: `url(${HeaderImg})`,

};

const navBar = {
  height: '90px',
  background: '#64247F'
};

const navItem = {
  // width: '200%'
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

        <Navbar style={navBar} variant='dark'>
          <Container>
            <Row>
              <Col>
                <Navbar expand='lg'>
                  <Navbar.Brand href='#'>{t('Menu.City')}</Navbar.Brand>
                </Navbar>
              </Col>
              <Col xs={4}>
                <Nav className='pills nav-fill'>
                  <LinkContainer style={navItem} to={Routes.Root}>
                    <Nav.Link to='/'>{t('Menu.Catalog')}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={navItem} to={Routes.Map}>
                    <Nav.Link to='/map'>{t('Menu.Map')}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={navItem} to={Routes.Blog}>
                    <Nav.Link to='#'>{t('Menu.Blog')}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={navItem} to={Routes.About}>
                    <Nav.Link to='/about'>{t('Menu.About')}</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Col>
            </Row>
          </Container>

        </Navbar>
      </>
    );
  }
}

export default Header;
