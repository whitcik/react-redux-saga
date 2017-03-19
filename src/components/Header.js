import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import routePaths from 'constans/routePaths';

export default class Header extends Component {
  isActive(clicked, current) {
    if(!clicked) {
      return false;
    }
    return clicked.path === current.pathname;
  }

  render() {
    console.log('Headerss', this.props, routePaths);
    const { HOME, ABOUT } = routePaths;
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to={HOME} isActive={this.isActive}>Home</NavLink>
              </li>
              <li>
                <NavLink to={ABOUT} isActive={this.isActive}>About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
