import React from 'react';
import PropTypes from "prop-types"
import { NavLink } from 'react-router-dom';

const DashboardStatsList = ({stats}) => {
    
  return (
      <div className="ui basic segment table-wrapper">
          <h2 className="ui header">Stats</h2>
          { stats.loading && (
              <div className="ui active inverted dimmer">
                  <div className="ui text loader">Loading</div>
              </div>
          )}
          <div className="ui segments">
              <div className="ui title segment">
                  Financials
              </div>

              <div className="ui horizontal segments">
                  <div className="ui segment">
                      <h3 className="ui sub header">
                          Revenue
                      </h3>
                      <span>{ formatMoney(stats.data.numbers.revenue) }</span>
                  </div>
                  <div className="ui segment">
                      <h3 className="ui sub header">
                          Cost
                      </h3>
                      <span>{ formatMoney(stats.data.numbers.cost) }</span>
                  </div>
                  <div className="ui segment">
                      <h3 className="ui sub header">
                          Profit
                      </h3>
                      <span>{ formatMoney(stats.data.numbers.profit) }</span>
                  </div>
              </div>

              <div className="ui title segment">
                  Totals
              </div>

              <div className="ui horizontal segments">
                  <div className="ui segment">
                      <h3 className="ui sub header">
                          <NavLink className="item" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined} to="/products">
                              Products
                          </NavLink>
                      </h3>
                      <span>{stats.data.products}</span>
                  </div>
                  <div className="ui segment">
                      <h3 className="ui sub header">
                          <NavLink className="item" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined} to="/customers">
                              Customers
                          </NavLink>
                      </h3>
                      <span>{stats.data.customers}</span>
                  </div>
                  <div className="ui segment">
                      <h3 className="ui sub header">
                          <NavLink className="item" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined} to="/orders">
                              Orders
                          </NavLink>
                      </h3>
                      <span>{stats.data.orders}</span>
                  </div>
              </div>
          </div>
      </div>
  );
};

function formatMoney(cents){
    var dollars = cents / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}

DashboardStatsList.propTypes = {
  stats: PropTypes.object.isRequired
};

export default DashboardStatsList;
