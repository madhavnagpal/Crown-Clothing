import styled from "@emotion/styled/macro";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

const CartIconContainer = styled("div")({
  width: "45px",
  height: "45px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

const ShoppingIcon = styled(ShoppingSvg)({
  width: "24px",
  height: "24px",
});

const ItemCount = styled("span")({
  position: "absolute",
  fontSize: "11px",
  fontWeight: "bold",
  bottom: "12px",
});

export { CartIconContainer, ShoppingIcon, ItemCount };
