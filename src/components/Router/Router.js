import { Switch, Route } from 'react-router-dom';
import Map from '../page/Map/Map';
import About from '../page/About/About';
import Blog from '../page/Blog/Blog';
import Catalog from '../page/Catalog/Catalog';
import CatalogMobx from '../page/CatalogMobx/CatalogMobx';
import React, { Component } from 'react';
import Routes from '../../config/routes';

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={Routes.Root} component={Catalog} />
          <Route exact path={Routes.CatalogMobx} component={CatalogMobx} />
          <Route exact path={Routes.About} component={About} />
          <Route exact path={Routes.Blog} component={Blog} />
          <Route exact path={Routes.Map} component={Map} />
        </Switch>
      </div>

    );
  }
}
export default Router;
