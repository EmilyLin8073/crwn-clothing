import React from "react";

import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggelCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggelCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggelCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggelCartHidden: () => dispatch(toggelCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity,
    0
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
