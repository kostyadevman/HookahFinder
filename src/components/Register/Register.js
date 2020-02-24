import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { ModalWindow } from 'components';

@withTranslation()
@observer
class Register extends Component {
  @observable name = ''
  @observable email = '';
  @observable password = '';
  @observable phone = '';

  static propTypes = {
    t: PropTypes.func.isRequired,
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onLoginClick: PropTypes.func.isRequired
  };

  handleRegisterClick = () => {
    const q = {
      name: this.email,
      email: this.email,
      password: this.password,
      phone: this.phone
    };
    console.log(q);
  }

  renderMainContent = () => {
    const { onLoginClick, t } = this.props;

    return (
      <form className='modal-form'>
        <h3 className='modal-title text-primary text-center' id='registerModalLabel'>Регистрация</h3>
        <div className='group'>
          <input type='text' name='name' required='required' onChange={(e) => { this.name = e.target.value; }} />
          <span className='highlight' />
          <span className='bar' />
          <label htmlFor='name'>Имя</label>
        </div>
        <div className='group'>
          <input type='text' name='email' required='required' onChange={(e) => { this.email = e.target.value; }} />
          <span className='highlight' />
          <span className='bar' />
          <label htmlFor='email'>E-mail</label>
        </div>
        <div className='group'>
          <input type='password' required='required' onChange={(e) => { this.password = e.target.value; }} />
          <span className='highlight' />
          <span className='bar' />
          <label htmlFor='password'>Пароль</label>
        </div>
        <div className='group'>
          <input type='phone' name='phone' required='required' onChange={(e) => { this.phone = e.target.value; }} />
          <span className='highlight' />
          <span className='bar' />
          <label htmlFor='phone'>+7 ( )</label>
        </div>
        <div className='text-center p-2'>
          <Button variant='primary' size='lg' style={{ minWidth: '270px' }} onClick={this.handleRegisterClick}>
            {t('Register.Next')}
          </Button>
        </div>
        <div className='text-center p-2'>
          <Button as='a' variant='link' href='#' onClick={onLoginClick}>
            {t('Register.Login')}
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

export default Register;
