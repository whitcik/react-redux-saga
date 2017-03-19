import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import routePaths from 'constans/routePaths';

export default class Header extends Component {

  render() {
    console.log('Header', this.props);
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link to={routePaths.HOME}>Home</Link></li>
              <li><Link to={routePaths.ABOUT}>About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
