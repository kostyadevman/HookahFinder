import React, { Component } from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import SocialNet from "../ScocialNet/SocialNet";


class Footer extends Component {
  render() {
    return (
        <Container fluid={true} className="bg-footer">
          <Row>
              <Container className="d-flex align-items-center">
                <div className="py-5 ml-auto">
                  <SocialNet></SocialNet>
                </div>
              </Container>
          </Row>
        </Container>
    );
  }
}

export default Footer;
