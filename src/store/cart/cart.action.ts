import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES } from "./cart.types";
import { createAction, withMatcher } from "../../utils/reducer.utils";

export const incrementItemQuantity = (payload: CategoryItem) =>
  createAction(CART_ACTION_TYPES.INCREMENT_ITEM_QUANTITY, payload);

export const decrementItemQuantity = (payload: CategoryItem) =>
  createAction(CART_ACTION_TYPES.DECREMENT_ITEM_QUANTITY, payload);

export const deleteItemFromCart = (payload: CategoryItem) =>
  createAction(CART_ACTION_TYPES.DELETE_ITEM_FROM_CART, payload);
