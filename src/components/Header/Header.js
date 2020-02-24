import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { matchPath, withRouter } from 'react-router';

import Routes from 'config/routes';
import LogoImg from 'assets/img/Logo.png';
import { Login, Register } from 'components';

@withTranslation()
@withRouter
@observer
class Header extends Component {
  @observable showLogin = false;
  @observable showRegister = false;

  static propTypes = {
    t: PropTypes.func,
    location: PropTypes.object
  };

  static MENU_DATA = [{
    to: Routes.Root,
    name: 'Catalog'
  }, {
    to: Routes.Map,
    name: 'Map'
  }, {
    to: Routes.Blog,
    name: 'Blog'
  }, {
    to: Routes.About,
    name: 'About'
  }]

  isCurrent = (currentPath, routePath) => {
    const match = matchPath(currentPath, {
      path: routePath,
      exact: true
    });

    return match !== null;
  };

  handleLoginClick = () => {
    this.showLogin = true;
  }

  handleHideLogin = () => {
    this.showLogin = false;
  };

  handleRegisterClick = () => {
    this.showLogin = false;
    this.showRegister = true;
  }

  handleLoginClick = () => {
    this.showRegister = false;
    this.showLogin = true;
  }

  handleHideRegister = () => {
    this.showRegister = false;
  };

  render() {
    const { t } = this.props;

    return (
      <>
        <Container fluid className='header-top'>
          <Row>
            <Container className='d-flex align-items-center py-5 position-relative'>
              <Col>
                <h1>{t('Header.Title')}</h1>
                <p>{t('Header.Description')}</p>
              </Col>
              <a className='header-top-logo d-none d-sm-block' href={Routes.Root}>
                <img src={LogoImg} />
              </a>
            </Container>
          </Row>
        </Container>
        <Container fluid className='container-menu'>
          <Row>
            <Container>
              <Navbar collapseOnSelect expand='sm' variant='dark'>
                <Navbar.Brand href='#'>Москва</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav as='ul'>
                    {Header.MENU_DATA.map((menuItem, i) => {
                      return (
                        <Nav.Item
                          key={i}
                          as='li'
                          className={`${this.isCurrent(this.props.location.pathname, menuItem.to) ? 'active' : ''} navbar-li p-2 px-md-3 py-md-4`}
                        >
                          <Nav.Link eventKey={i} as={Link} to={menuItem.to}>{t(`Menu.${menuItem.name}`)}</Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                  <Navbar.Brand onClick={this.handleLoginClick}>{t('Menu.Login')}</Navbar.Brand>
                </Navbar.Collapse>
              </Navbar>
            </Container>
          </Row>
        </Container>
        <Login show={this.showLogin} onHide={this.handleHideLogin} onRegisterClick={this.handleRegisterClick} />
        <Register show={this.showRegister} onHide={this.handleHideRegister} onLoginClick={this.handleLoginClick} />
      </>
    );
  }
}

export default Header;
