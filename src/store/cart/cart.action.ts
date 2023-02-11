import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer.utils";

export type IncrementItemQuantity = ActionWithPayload<
  CART_ACTION_TYPES.INCREMENT_ITEM_QUANTITY,
  CategoryItem
>;

export type DecrementItemQuantity = ActionWithPayload<
  CART_ACTION_TYPES.DECREMENT_ITEM_QUANTITY,
  string
>;

export type DeleteItem = ActionWithPayload<
  CART_ACTION_TYPES.DELETE_ITEM_FROM_CART,
  string
>;

export const incrementItemQuantity = withMatcher(
  (payload: CategoryItem): IncrementItemQuantity =>
    createAction(CART_ACTION_TYPES.INCREMENT_ITEM_QUANTITY, payload)
);

export const decrementItemQuantity = (payload: CategoryItem) =>
  createAction(CART_ACTION_TYPES.DECREMENT_ITEM_QUANTITY, payload);

export const deleteItemFromCart = (payload: CategoryItem) =>
  createAction(CART_ACTION_TYPES.DELETE_ITEM_FROM_CART, payload);
