import produce from "immer";
import { CartState } from "./cart.reducer";
import { CategoryItem } from "../categories/category.types";

export const incrementItemQuantity = produce(
  (draft: CartState, item: CategoryItem) => {
    if (draft.cartItems[item.id]) {
      draft.cartItems[item.id].quantity += 1;
    } else {
      draft.cartItems[item.id] = { ...item, quantity: 1 };
    }
  }
);

export const decrementItemQuantity = produce(
  (draft: CartState, itemId: number) => {
    draft.cartItems[itemId].quantity -= 1;
    if (!draft.cartItems[itemId].quantity) delete draft.cartItems[itemId];
  }
);

export const deleteItemFromCart = produce(
  (draft: CartState, itemId: number) => {
    delete draft.cartItems[itemId];
  }
);
