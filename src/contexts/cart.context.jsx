import { createContext, useReducer } from "react";
import { cloneDeep } from "../utils/helpers.utils";

export const CartContext = createContext({
  cartItems: {},
  cartCount: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  decrementItemQuantity: () => {},
  deleteItemFromCart: () => {},
});

const initialState = {
  cartItems: {},
  cartCount: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPES = {
  ADD_CART_ITEM: "ADD_CART_ITEM",
  DECREMENT_CART_ITEM: "DECREMENT_CART_ITEM",
  DELETE_CART_ITEM: "DELETE_CART_ITEM",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_CART_ITEM:
      return addItem(state, payload);
    case CART_ACTION_TYPES.DECREMENT_CART_ITEM:
      return decrementItem(state, payload);
    case CART_ACTION_TYPES.DELETE_CART_ITEM:
      return deleteItem(state, payload);
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

function addItem(prevState, item) {
  const updatedCartItems = cloneDeep(prevState.cartItems);
  if (updatedCartItems[item.id]) {
    updatedCartItems[item.id].quantity += 1;
  } else {
    updatedCartItems[item.id] = { ...item, quantity: 1 };
  }
  return {
    cartItems: updatedCartItems,
    cartTotal: prevState.cartTotal + item.price,
    cartCount: prevState.cartCount + 1,
  };
}

function decrementItem(prevState, itemId) {
  const updatedCartItems = cloneDeep(prevState.cartItems);
  updatedCartItems[itemId].quantity -= 1;
  const itemPrice = updatedCartItems[itemId].price;
  if (!updatedCartItems[itemId].quantity) {
    delete updatedCartItems[itemId];
  }
  return {
    cartItems: updatedCartItems,
    cartTotal: prevState.cartTotal - itemPrice,
    cartCount: prevState.cartCount - 1,
  };
}

function deleteItem(prevState, itemId) {
  const updatedCartItems = cloneDeep(prevState.cartItems);
  const itemPrice = updatedCartItems[itemId].price;
  const itemQuantity = updatedCartItems[itemId].quantity;
  delete updatedCartItems[itemId];
  return {
    cartItems: updatedCartItems,
    cartTotal: prevState.cartTotal - itemPrice * itemQuantity,
    cartCount: prevState.cartCount - itemQuantity,
  };
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { cartItems, cartCount, cartTotal } = state;

  const addItemToCart = (cartItemToAdd) => {
    dispatch({
      type: CART_ACTION_TYPES.ADD_CART_ITEM,
      payload: cartItemToAdd,
    });
  };

  const decrementItemQuantity = (cartItemId) => {
    dispatch({
      type: CART_ACTION_TYPES.DECREMENT_CART_ITEM,
      payload: cartItemId,
    });
  };

  const deleteItemFromCart = (cartItemId) => {
    dispatch({
      type: CART_ACTION_TYPES.DELETE_CART_ITEM,
      payload: cartItemId,
    });
  };

  const value = {
    cartItems,
    cartCount,
    cartTotal,
    addItemToCart,
    decrementItemQuantity,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
