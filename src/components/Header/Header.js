import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withTranslation } from 'react-i18next';
import HeaderImg from '../../assets/img/header_img.png';

const pic = {
  width: '100%',
  height: '192px',
  backgroundImage: `url(${HeaderImg})`
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
      <div>
        <div style={pic}>
          <h1>Header ( Title & Logo )</h1>
        </div>
        <Navbar style={navBar} variant='dark'>
          <Container>
            <Row>
              <Col>
                <Navbar expand='lg'>
                  <Navbar.Brand href='#'>{t('Menu.City')}</Navbar.Brand>
                </Navbar>
              </Col>
              <Col xs={3}>
                <Nav className='pills'>
                  <LinkContainer style={navItem} to='/'>
                    <Nav.Link to='/'>{t('Menu.Catalog')}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={navItem} to='/map'>
                    <Nav.Link to='/map'>{t('Menu.Map')}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={navItem} to='/users'>
                    <Nav.Link to='#'>{t('Menu.Blog')}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={navItem} to='/about'>
                    <Nav.Link to='/about'>{t('Menu.About')}</Nav.Link>
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
