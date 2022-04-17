import { useContext } from "react";
import styled from "@emotion/styled/macro";

import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { CartContext } from "../contexts/cart.context";

const CartIcon = ({ onClick }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <StyledContainer onClick={onClick}>
      <StyledShoppingIcon />
      <StyledCount>{cartCount}</StyledCount>
    </StyledContainer>
  );
};

export default CartIcon;

const StyledCount = styled("span")({
  position: "absolute",
  fontSize: "11px",
  fontWeight: "bold",
  bottom: "12px",
});

const StyledShoppingIcon = styled(ShoppingIcon)({
  width: "24px",
  height: "24px",
});

const StyledContainer = styled("div")({
  width: "45px",
  height: "45px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});
