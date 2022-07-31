import { cloneDeep } from "../../utils/helpers.utils";

export const incrementItemQuantity = (prevState, item) => {
  const updatedCartItems = cloneDeep(prevState.cartItems);
  if (updatedCartItems[item.id]) {
    updatedCartItems[item.id].quantity += 1;
  } else {
    updatedCartItems[item.id] = { ...item, quantity: 1 };
  }
  return {
    cartItems: updatedCartItems,
  };
}

export const decrementItemQuantity = (prevState, itemId) => {
  const updatedCartItems = cloneDeep(prevState.cartItems);
  updatedCartItems[itemId].quantity -= 1;
  if (!updatedCartItems[itemId].quantity) {
    delete updatedCartItems[itemId];
  }
  return {
    cartItems: updatedCartItems,
  };
}

export const deleteItemFromCart = (prevState, itemId) => {
  const updatedCartItems = cloneDeep(prevState.cartItems);
  delete updatedCartItems[itemId];
  return {
    cartItems: updatedCartItems,
  };
}