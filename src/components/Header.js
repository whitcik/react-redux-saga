import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
