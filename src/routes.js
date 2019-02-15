import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';
import { apm } from 'elastic-apm-js-base/src/index'

import App from './components/App';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Products from './components/Products';
import Orders from './components/Orders';
import Order from './components/Order';
import Customers from './components/Customers';
import Customer from './components/Customer';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" onChange={(prevState, nextState, replace) => {
      var route = nextState.routes[nextState.routes.length - 1]
      apm.startTransaction(route.path, 'Route Change')
    }} component={App}>
      <IndexRedirect to="/dashboard" />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/products" component={Products} />
      <Route path="/products/:id" component={Product} />
      <Route path="/orders" component={Orders} />
      <Route path="/orders/:id" component={Order} />
      <Route path="/customers" component={Customers} />
      <Route path="/customers/:id" component={Customer} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
