import React, { PureComponent } from 'react';
import Cart from './Cart';
import Shelf from './Shelf';

export default class Home extends PureComponent {

  render() {
    console.log('Home', this.props);
    return (
      <section className='container page-content-wrapper'>
        <Shelf />
        <Cart />
      </section>
    );
  }
}
