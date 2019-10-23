import React, { Component } from 'react';
import classnames from 'classnames';
import { Route, Redirect, Switch } from 'react-router-dom'
import { ApmRoute } from '@elastic/apm-rum-react'

import './style.css';

import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

import Dashboard from '../Dashboard';
import Product from '../Product';
import Products from '../Products';
import Orders from '../Orders';
import Order from '../Order';
import Customers from '../Customers';
import Customer from '../Customer';
import NotFound from '../NotFound';

class App extends Component {

  render() {
    const { className } = this.props;
    return (
      <div className={classnames('App', className)}>
        <AppHeader />

        <div className="AppMain">
          <Switch>
            <ApmRoute
              exact
              path="/"
              component={() => (
                <Redirect
                  to={{
                    pathname: '/dashboard'
                  }}
                />
              )}
            />
            <ApmRoute path="/dashboard" component={Dashboard} />
            <ApmRoute path="/products" component={Products} />
            <ApmRoute path="/products/:id" component={Product} />
            <ApmRoute path="/orders" component={Orders} />
            <ApmRoute path="/orders/:id" component={Order} />
            <ApmRoute path="/customers" component={Customers} />
            <ApmRoute path="/customers/:id" component={Customer} />
            <Route component={NotFound} />
          </Switch>
        </div>

        <AppFooter />
      </div>
    );
  }
}

export default App;
