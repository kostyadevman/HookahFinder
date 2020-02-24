import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../page/About/About';
import Blog from '../page/Blog/Blog';
import Catalog from '../page/Catalog/Catalog';
import Routes from 'config/routes';

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={Routes.Root} component={Catalog} />
          <Route exact path={Routes.Map} component={Catalog} />
          <Route exact path={Routes.About} component={About} />
          <Route exact path={Routes.Blog} component={Blog} />
        </Switch>
      </div>

    );
  }
}
export default Router;
