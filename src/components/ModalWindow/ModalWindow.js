import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Routes from 'config/routes';
import LogoSvg from 'assets/img/Logo.svg';

@withTranslation()
class ModalWindow extends Component {
  static propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    mainContent: PropTypes.object.isRequired
  };

  render() {
    const { show, onHide, mainContent } = this.props;

    return (
      <Modal show={show} onHide={onHide} dialogAs='div'>
        <div className='login-modal modal-dialog'>
          <div className='modal-content container h-100 position-relative'>
            <Row className='h-100'>
              <Col md={6} className='d-flex align-items-center justify-content-center'>
                {mainContent}
              </Col>

              <Col md={6} className='d-none d-md-flex modal-right align-items-center justify-content-center'>
                <a className='my-5 d-block' href={Routes.Root}>
                  <img src={LogoSvg} style={{ height: '240px' }} />
                </a>
              </Col>
            </Row>
            <div className='modal-close'>
              <button type='button' className='close text-white' aria-label='Close' onClick={onHide}>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ModalWindow;
