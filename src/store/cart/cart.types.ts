import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES {
  INCREMENT_ITEM_QUANTITY = "cart/INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY = "cart/DECREMENT_ITEM_QUANTITY",
  DELETE_ITEM_FROM_CART = "cart/DELETE_ITEM_FROM_CART",
}

export type CartItem = CategoryItem & {
  quantity: number;
};

export type CartItems = {
  [key: string]: CartItem;
};
