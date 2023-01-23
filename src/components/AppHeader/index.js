import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

class AppHeader extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('AppHeader', className)} {...props}>
            <div className="ui large blue inverted menu">
                <div className="ui container">
                    <NavLink className="item" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined} to="/dashboard">
                        <i className="dashboard icon"></i>
                        Dashboard
                    </NavLink>

                    <div className="menu right">
                        <NavLink className="item" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined} to="/products">
                            <i className="coffee icon"></i>
                            Products
                        </NavLink>
                        <NavLink className="item" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined} to="/orders">
                            <i className="cart icon"></i>
                            Orders
                        </NavLink>
                        <NavLink className="item" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined} to="/customers">
                            <i className="users icon"></i>
                            Customers
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default AppHeader;
