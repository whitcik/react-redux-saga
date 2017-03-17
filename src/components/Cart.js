import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cartActions';

class Cart extends Component {

  deleteItem = (id) => {
    this.props.actions.deleteFromCart(id);
  }

  generateItems = () => {

    return this.props.cart.map((item) => {
        return (
          <li key={item.id}>
            <button onClick={this.deleteItem.bind(null, item.id)}>
              -
            </button>
            {item.name}
          </li>
        );
    });
  }

  render() {
    console.log('CartRender', this.props);
    return (
      <div className="Cart">
        <h2>Shopping Bag</h2>
        <ol>
            {this.generateItems()}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);