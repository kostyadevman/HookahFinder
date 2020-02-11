import { Switch, Route } from 'react-router-dom';
import Map from '../page/Map/Map';
import About from '../page/About/About';
import Blog from '../page/Blog/Blog';
import Catalog from '../page/Catalog/Catalog';
import React, { Component } from 'react';
import PropTypes from "prop-types";
import Routes from "../../config/routes";

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={Routes.Root} component={Catalog} />
          <Route path={Routes.About} component={About} />
          <Route path={Routes.Blog} component={Blog} />
          <Route path={Routes.Map} component={Map} />
        </Switch>
      </div>

    );
  }
}
export default Router;
