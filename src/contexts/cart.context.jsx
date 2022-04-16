import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  let itemAlreadyExists;

  const updatedCartItems = cartItems.map((cartItem) => {
    if (cartItem.id === productToAdd.id) {
      itemAlreadyExists = true;
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    }
    return cartItem;
  });

  if (!itemAlreadyExists)
    updatedCartItems.push({ ...productToAdd, quantity: 1 });

  return updatedCartItems;
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const value = { cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
