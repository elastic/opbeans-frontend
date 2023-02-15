import React, { Component } from 'react';
import classnames from 'classnames';
import { useParams,Route, Navigate, Routes } from 'react-router-dom'
import { withTransaction } from '@elastic/apm-rum-react'

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

import './style.css';

// Hooks can only be called inside the body of a function component.
function CustomerId() {
  let { id } = useParams()
  return <Customer customerId={id} />
}

function OrderId() {
  let { id } = useParams()
  return <Order orderId={id} />
}

function ProductId() {
  let { id } = useParams()
  return <Product productId={id} />
}

/*
react-router-dom v6 is not supported https://github.com/elastic/apm-agent-rum-js/issues/1176
<ApmRoute path="/products" component={Products} />
so we use withTransaction instead
*/
class App extends Component {

  render() {
    const { className } = this.props;
    return (
      <div className={classnames('App', className)}>
        <AppHeader />
        <div className="AppMain">
        <Routes>
          <Route
                exact
                path="/"
                element={<Navigate to='/dashboard' />}
              />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductId />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderId />} /> 
          <Route path="/customers" element={ <Customers />} />
          <Route path="/customers/:id" element={<CustomerId />} />
          <Route element={NotFound} />
        </Routes>
        </div>

        <AppFooter />
      </div>
    );
  }
}

export default App;
