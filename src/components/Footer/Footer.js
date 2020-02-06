import React, { Component } from 'react';
import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  VKIcon,
  WhatsappIcon
} from "react-share";


const footerItem = {
    width: '100%',
    height: '150px',
    background: '#64247F',
}


class Footer extends Component {
  render() {
    return (
        <div style={footerItem}>
            <div>
                <TwitterIcon size={32} round={true} />
                <TelegramIcon size={32} round={true} />
                <FacebookIcon size={32} round={true} />
                <VKIcon size={32} round={true} />
                <WhatsappIcon size={32} round={true} />
            </div>
        </div>
    );
  }
}

export default Footer;
