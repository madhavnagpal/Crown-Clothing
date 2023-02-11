import { AnyAction } from "redux";
import { CART_ACTION_TYPES, CartItems } from "./cart.types";
import {
  incrementItemQuantity,
  decrementItemQuantity,
  deleteItemFromCart,
} from "./cart.utils";

export type CartState = {
  cartItems: CartItems;
};

const CART_INITIAL_STATE: CartState = {
  cartItems: {},
};

const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
): CartState => {
  const { type, payload } = action;

  if (incrementItemQuantity.mat)
    switch (type) {
      case CART_ACTION_TYPES.INCREMENT_ITEM_QUANTITY:
        return incrementItemQuantity(state, payload);
      case CART_ACTION_TYPES.DECREMENT_ITEM_QUANTITY:
        return decrementItemQuantity(state, payload);
      case CART_ACTION_TYPES.DELETE_ITEM_FROM_CART:
        return deleteItemFromCart(state, payload);
      // default:
      //   return state;
    }
};

export default cartReducer;
