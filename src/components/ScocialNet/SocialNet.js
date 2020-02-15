import React, { Component } from 'react';
import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  VKIcon,
  WhatsappIcon
} from 'react-share';


class SocialNet extends Component {
  render() {
    return (
      <>
        <div>
          <TwitterIcon size={32} round />
          <TelegramIcon size={32} round />
          <FacebookIcon size={32} round />
          <VKIcon size={32} round />
          <WhatsappIcon size={32} round />
        </div>
      </>
    );
  }
}

export default SocialNet;
