import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { About, Blog, BlogItem, Catalog } from 'pages';
import Routes from 'config/routes';

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={Routes.Hookahs} component={Catalog} />
          <Route exact path={Routes.Map} component={Catalog} />
          <Route exact path={Routes.About} component={About} />
          <Route exact path={Routes.Blog} component={Blog} />
          <Route exact path={Routes.BlogItem} component={BlogItem} />
        </Switch>
      </div>
    );
  }
}
export default Router;
