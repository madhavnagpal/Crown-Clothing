import styled from "@emotion/styled/macro";
import CustomButton from "../Button/Button";

const CartDropdownContainer = styled("div")({
  width: "240px",
  height: "360px",
  display: "flex",
  flexDirection: "column",
  padding: "20px 0 20px 20px",
});

const EmptyMessage = styled("div")({
  fontSize: "18px",
  margin: "50px auto",
  paddingRight: "20px",
});

const CartItems = styled("div")({
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

const Button = styled(CustomButton)({
  margin: "auto 20px 0 0",
});

export { CartDropdownContainer, CartItems, EmptyMessage, Button };
