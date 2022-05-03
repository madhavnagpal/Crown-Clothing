import styled from "@emotion/styled/macro";

const CartItemContainer = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  minHeight: "80px",
  marginBottom: "15px",
});

const ItemAvatar = styled("img")({
  width: "30%",
  borderRadius: "3px",
});

const ItemDetails = styled("div")({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "10px 20px",
});

const ItemName = styled("span")({
  fontSize: "16px",
});

export { CartItemContainer, ItemAvatar, ItemDetails, ItemName };
