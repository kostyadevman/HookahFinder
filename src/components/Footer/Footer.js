import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import LogoImg from 'assets/img/Logo.png';
import SocialNet from '../SocialNet/SocialNet';
import Routes from 'config/routes';

class Footer extends Component {
  static MAIL_TO = 'hi.support@gmail.com'

  render() {
    return (
      <Container fluid className='bg-footer'>
        <Row>
          <Container className='d-flex align-items-center'>
            <a className='py-5' href={Routes.Root}>
              <img src={LogoImg} />
            </a>
            <div className='py-5 ml-auto'>
              <a href={`mailto:${Footer.MAIL_TO}`} className='text-white-50'>{Footer.MAIL_TO}</a>
              <div>
                <SocialNet />
              </div>
            </div>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Footer;
