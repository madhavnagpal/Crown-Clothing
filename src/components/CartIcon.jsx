import styled from "@emotion/styled/macro";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartIcon = ({ onClick }) => {
  return (
    <StyledContainer onClick={onClick}>
      <StyledShoppingIcon />
      <StyledCount>0</StyledCount>
    </StyledContainer>
  );
};

export default CartIcon;

const StyledCount = styled("span")({
  position: "absolute",
  fontSize: "10px",
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
