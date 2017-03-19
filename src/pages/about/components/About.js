import React, { PureComponent } from 'react';

export default class About extends PureComponent {

  render() {
    console.log('About', this.props);
    return (
      <div className='container'>
        <h2>About</h2>
      </div>
    );
  }
}
