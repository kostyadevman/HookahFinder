import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main'
import Header from "./components/Header/Header";


class App extends Component {
  render() {
    return (
           <div>
           <Header/>
            <Main />
          </div>
    );
  }
}


export default App;


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))
