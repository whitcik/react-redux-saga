import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../../actions/home/cartActions';

class Shelf extends Component {

  constructor(props) {
    super(props);
    this.onAddItemToCart = this.onAddItemToCart.bind(this);
  }

  onAddItemToCart(item) {
      this.props.actions.addToCartAsync(item);
  }

  render() {
    console.log('ShelfRender', this.props);
    const shelfItems = this.props.shelfItems.map((item, idx) => {
      return (
        <li key={idx}>
          <button onClick={() => this.onAddItemToCart(item)}>+</button>
          {item}
        </li>
      );
    });
    
    return (
      <div>
          <h2>Store Shelf:</h2>
          <ul>
            {shelfItems}
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        shelfItems: state.shelf
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shelf);