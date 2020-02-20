import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import ICU from 'i18next-icu';
import i18nConfig from 'config/i18n';

import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

i18n
  .use(ICU)
  .use(initReactI18next)
  .init(i18nConfig);

window.i18n = i18n;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container fluid>
          <Router />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;

ReactDOM.render((
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>
), document.getElementById('app'));
