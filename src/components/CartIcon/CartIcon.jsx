import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIcon.styles";

const CartIcon = ({ onClick }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
