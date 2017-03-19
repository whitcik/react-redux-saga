import React, { Component } from 'react';
import Cart from './Cart';
import Shelf from './Shelf';

export default class Home extends Component {

  render() {
    console.log('Home', this.props);
    return (
      <div className='container'>
        <Shelf />
        <Cart />
      </div>
    );
  }
}
