import React, { Component } from 'react';



const footerItem = {
    width: '100%',
    height: '150px',
    background: '#ffc2d5',
}


class Footer extends Component {
  render() {
    return (
        <div style={footerItem}>
            <h1>Footer</h1>
        </div>
    );
  }
}

export default Footer;
