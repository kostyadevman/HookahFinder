import { Switch, Route } from 'react-router-dom';
import Map from '../page/Map/Map';
import About from '../page/About/About';
import User from '../page/User/User';
import Catalog from '../page/Catalog/Catalog';
import React, { Component } from 'react';

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Catalog} />
          <Route path='/about' component={About} />
          <Route path='/users' component={User} />
          <Route path='/map' component={Map} />
        </Switch>
      </div>

    );
  }
}
export default Router;
