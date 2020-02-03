import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


class App extends Component {
  render() {
    return (
           <div>
               <Header/>
               <Container>
                   <Router />
               </Container>
               <Footer/>
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
