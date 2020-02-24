import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

@withTranslation()
class ModalFilter extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    mainContent: PropTypes.object.isRequired
  };

  render() {
    const { show, onHide, mainContent, t } = this.props;

    return (
      <Modal show={show} onHide={onHide} dialogAs='div'>
        <div className='modal-content'>
          <Modal.Header closeButton>
            <Modal.Title as='h5'>{t('ModalFilter.Filter')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {mainContent}
          </Modal.Body>
        </div>
      </Modal>
    );
  }
}

export default ModalFilter;
