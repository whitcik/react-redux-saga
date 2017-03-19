import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import routePaths from 'constans/routePaths';
import './Header.css';

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
      <header className="container">
        <nav className="navbar navbar-inverse">
            <div className="navbar-header">
              <NavLink className="navbar-brand" to={HOME} isActive={this.isActive}>
                Project name
              </NavLink>
            </div>
            <div id="navbar">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to={HOME} isActive={this.isActive}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={ABOUT} isActive={this.isActive}>About</NavLink>
                </li>
              </ul>
            </div>
        </nav>
      </header>
    );
  }
}
