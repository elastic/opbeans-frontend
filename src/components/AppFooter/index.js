import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

class AppFooter extends Component {

    getSettingsWindow (e) {
        e.preventDefault();
        this.loadSettings();
    }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('AppFooter', className)} {...props}>
          <div className="ui inverted vertical footer segment">
              <div className="ui container">
                  <div className="ui stackable inverted divided equal height stackable grid">
                      <div className="three wide column">
                          <div className="ui inverted link list">
                              <NavLink className="item" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined} to="/dashboard">
                                  Dashboard
                              </NavLink>
                              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                              <a href="#" onClick={ this.getSettingsWindow } className="item">Settings</a>
                              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                              <a href="#" className="item disabled">Log out</a>
                          </div>
                      </div>
                      <div className="seven wide column">
                          <p>
                              2017 © Opbeans Coffee Management System<br/>
                              <span>This is a demo application made by <a href="https://opbeat.com">Opbeat</a></span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default AppFooter;
