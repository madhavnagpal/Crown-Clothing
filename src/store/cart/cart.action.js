import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer.utils";

export const incrementItemQuantity = (payload) =>
  createAction(CART_ACTION_TYPES.INCREMENT_ITEM_QUANTITY, payload);

export const decrementItemQuantity = (payload) =>
  createAction(CART_ACTION_TYPES.DECREMENT_ITEM_QUANTITY, payload);

export const deleteItemFromCart = (payload) =>
  createAction(CART_ACTION_TYPES.DELETE_ITEM_FROM_CART, payload);
