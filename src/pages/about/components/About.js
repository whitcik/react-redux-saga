import React, { PureComponent } from 'react';

export default class About extends PureComponent {

  render() {
    console.log('About', this.props);
    return (
      <section className=' container page-content-wrapper'>
        <div className="row">
          <div className="col-xs-12">
            <h2>About</h2>
          </div>
        </div>
      </section>
    );
  }
}
