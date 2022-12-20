import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  Object.values(cartItems).reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  Object.values(cartItems).reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
