import { createContext, useState, useEffect } from "react";
import { cloneDeep } from "../utils/helpers.utils";

export const CartContext = createContext({
  cartItems: {},
  cartCount: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  decrementItemQuantity: () => {},
  deleteItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let count = 0;
    let totalPrice = 0;
    Object.values(cartItems).forEach(({ price, quantity }) => {
      count += quantity;
      totalPrice += quantity * price;
    });
    setCartCount(count);
    setCartTotal(totalPrice);
  }, [cartItems]);

  const addItemToCart = (cartItemToAdd) => {
    setCartItems(addCartItem(cartItems, cartItemToAdd));
  };

  const decrementItemQuantity = (cartItemId) => {
    setCartItems(decrementCartItemQuantity(cartItems, cartItemId));
  };

  const deleteItemFromCart = (cartItemId) => {
    const cartItemsCopy = cloneDeep(cartItems);
    delete cartItemsCopy[cartItemId];
    setCartItems(cartItemsCopy);
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

function addCartItem(cartItems, cartItemToAdd) {
  const cartItemsCopy = cloneDeep(cartItems);
  if (cartItemsCopy[cartItemToAdd.id]) {
    cartItemsCopy[cartItemToAdd.id].quantity += 1;
  } else {
    cartItemsCopy[cartItemToAdd.id] = { ...cartItemToAdd, quantity: 1 };
  }
  return cartItemsCopy;
}

function decrementCartItemQuantity(cartItems, cartItemId) {
  const cartItemsCopy = cloneDeep(cartItems);
  cartItemsCopy[cartItemId].quantity -= 1;
  if (!cartItemsCopy[cartItemId].quantity) {
    delete cartItemsCopy[cartItemId];
  }
  return cartItemsCopy;
}
