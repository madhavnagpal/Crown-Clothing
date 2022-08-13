import produce from "immer";

export const incrementItemQuantity = produce((draft, item) => {
  if (draft.cartItems[item.id]) {
    draft.cartItems[item.id].quantity += 1;
  } else {
    draft.cartItems[item.id] = { ...item, quantity: 1 };
  }
});

export const decrementItemQuantity = produce((draft, itemId) => {
  draft.cartItems[itemId].quantity -= 1;
  if (!draft.cartItems[itemId].quantity) delete draft.cartItems[itemId];
});

export const deleteItemFromCart = produce((draft, itemId) => {
  delete draft.cartItems[itemId];
});
