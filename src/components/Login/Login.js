import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { ModalWindow } from 'components';

@withTranslation()
class Login extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onRegisterClick: PropTypes.func.isRequired
  };

  renderMainContent = () => {
    const { onRegisterClick, t } = this.props;

    return (
      <form className='modal-form'>
        <h3 className='modal-title text-primary text-center' id='loginModalLabel'>{t('Login.Login')}</h3>
        <div className='group'>
          <input type='text' name='email' required='required' />
          <span className='highlight' />
          <span className='bar' />
          <label htmlFor='email'>{t('Login.Email')}</label>
        </div>
        <div className='group'>
          <input type='password' name='password' required='required' />
          <span className='highlight' />
          <span className='bar' />
          <label htmlFor='password'>{t('Login.Password')}</label>
        </div>
        <div className='text-center p-2'>
          <button className='btn btn-primary btn-lg' style={{ minWidth: '270px' }}>{t('Login.Next')}</button>
        </div>
        <div className='text-center p-2'>
          <Button as='a' variant='link' href='#' onClick={onRegisterClick}>
            {t('Login.Register')}
          </Button>
        </div>
      </form>
    );
  }

  render() {
    const { show, onHide } = this.props;

    return (
      <ModalWindow show={show} onHide={onHide} mainContent={this.renderMainContent()} />
    );
  }
}

export default Login;
