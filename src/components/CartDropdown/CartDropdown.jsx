import { useNavigate } from "react-router-dom";
import { Popover } from "@mui/material";
import { useSelector } from "react-redux";

import CartItem from "../CartItem/CartItem";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  Button,
} from "./CartDropdown.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const paperProps = {
  sx: {
    border: "1px solid black",
    background: "white",
  },
};

const CartDropdown = ({ anchorEl, onClose }) => {
  const cartItems = useSelector(selectCartItems);
  const cartItemEntries = Object.entries(cartItems);
  const navigate = useNavigate();

  const onCheckout = () => {
    navigate("/checkout");
    onClose();
  };

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      PaperProps={paperProps}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <CartDropdownContainer>
        <CartItems>
          {cartItemEntries.length ? (
            cartItemEntries.map(([productId, cartItem]) => (
              <CartItem key={productId} cartItem={cartItem} />
            ))
          ) : (
            <EmptyMessage>Your Cart is Empty</EmptyMessage>
          )}
        </CartItems>

        <Button onClick={onCheckout}>Go To Checkout</Button>
      </CartDropdownContainer>
    </Popover>
  );
};

export default CartDropdown;
