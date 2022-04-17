import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Popover } from "@mui/material";
import styled from "@emotion/styled/macro";

import Button from "./Button";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/cart.context";

const paperProps = {
  sx: {
    border: "1px solid black",
    background: "white",
  },
};

const CartDropdown = ({ anchorEl, onClose }) => {
  const { cartItems } = useContext(CartContext);
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
      <StyledContainer>
        <StyledCartItems>
          {!cartItemEntries.length && (
            <StyledEmptyMsg>No Items added yet</StyledEmptyMsg>
          )}
          {cartItemEntries.map(([productId, cartItem]) => (
            <CartItem key={productId} cartItem={cartItem} />
          ))}
        </StyledCartItems>

        <StyledButton onClick={onCheckout}>Go To Checkout</StyledButton>
      </StyledContainer>
    </Popover>
  );
};

export default CartDropdown;

const StyledContainer = styled("div")({
  width: "240px",
  height: "360px",
  display: "flex",
  flexDirection: "column",
  padding: "20px 0 20px 20px",
});

const StyledEmptyMsg = styled("div")({
  fontSize: "18px",
  margin: "50px auto",
  paddingRight: "20px",
});

const StyledCartItems = styled("div")({
  height: "240px",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-track": {},
  "&::-webkit-scrollbar-thumb": {
    background: "black",
    borderRadius: "5px",
  },
});

const StyledButton = styled(Button)({
  margin: "auto 20px 0 0",
});
