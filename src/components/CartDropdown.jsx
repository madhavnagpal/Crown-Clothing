import { useContext } from "react";
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
        {cartItems.length ? (
          <StyledCartItems>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </StyledCartItems>
        ) : (
          <StyledEmptyMsg>no</StyledEmptyMsg>
        )}
        <StyledButton>Go To Checkout</StyledButton>
      </StyledContainer>
    </Popover>
  );
};

export default CartDropdown;

const StyledContainer = styled("div")({
  width: "240px",
  height: "340px",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
});

const StyledEmptyMsg = styled("div")({
  fontSize: "18px",
  margin: "50px auto",
});

const StyledCartItems = styled("div")({
  height: "240px",
  display: "flex",
  flexDirection: "column",
  overflow: "scroll",
});

const StyledButton = styled(Button)({
  marginTop: "auto",
});
