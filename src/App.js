import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import ICU from 'i18next-icu';
import { withRouter } from 'react-router';

import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Router, Header, Footer } from './components';

import i18nConfig from 'config/i18n';
import Routes from 'config/routes';
import { isCurrent } from 'utils/route';

i18n
  .use(ICU)
  .use(initReactI18next)
  .init(i18nConfig);

window.i18n = i18n;

@withRouter
class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { location, history } = this.props;
    if (isCurrent(location.pathname, Routes.Root, true)) {
      history.replace(Routes.Hookahs);
    }
  }

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
