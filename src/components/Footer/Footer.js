import React, { Component } from 'react';
import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  VKIcon,
  WhatsappIcon
} from 'react-share';

const footerItem = {
  width: '100%',
  height: '150px',
  background: '#64247F'
};

class Footer extends Component {
  render() {
    return (
      <div style={footerItem}>
        <div>
          <TwitterIcon size={32} round />
          <TelegramIcon size={32} round />
          <FacebookIcon size={32} round />
          <VKIcon size={32} round />
          <WhatsappIcon size={32} round />
        </div>
      </div>
    );
  }
}

export default Footer;
