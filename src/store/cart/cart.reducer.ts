import { CART_ACTION_TYPES } from "./cart.types";
import {
  incrementItemQuantity,
  decrementItemQuantity,
  deleteItemFromCart,
} from "./cart.utils";

const CART_INITIAL_STATE = {
  cartItems: {},
};

const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.INCREMENT_ITEM_QUANTITY:
      return incrementItemQuantity(state, payload);
    case CART_ACTION_TYPES.DECREMENT_ITEM_QUANTITY:
      return decrementItemQuantity(state, payload);
    case CART_ACTION_TYPES.DELETE_ITEM_FROM_CART:
      return deleteItemFromCart(state, payload);
    default:
      return state;
  }
};

export default cartReducer;
