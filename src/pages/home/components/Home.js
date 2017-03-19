import React, { Component } from 'react';
import Cart from './Cart';
import Shelf from './Shelf';

export default class Home extends Component {

  render() {
    console.log('content', this.props);
    return (
      <div className='container'>
        <div className='starter-template'>
          <Shelf />
          <Cart />
        </div>
      </div>
    );
  }
}
