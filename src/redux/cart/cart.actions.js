import { CartActionTypes } from "./cart.types";

export const toggelCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_TIEM,
  payload: item
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
