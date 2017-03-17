import React, { Component } from 'react';
import Cart from './components/Cart';
import Shelf from './components/Shelf';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
				<div className="row">
					<div className="col-xs-12">
              <Shelf />
              <Cart />
					</div>
				</div>
      </div>
    );
  }
}

export default App;
