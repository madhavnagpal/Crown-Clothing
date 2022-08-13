import { useDispatch } from "react-redux";
import styled from "@emotion/styled/macro";

import Button, { BUTTON_TYPES } from "./Button/Button";
import { incrementItemQuantity } from "../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;

  const onAddToProduct = () => dispatch(incrementItemQuantity(product));

  return (
    <StyledContainer>
      <StyledImage src={imageUrl} alt={name} />
      <StyledFooter>
        <StyledName>{name}</StyledName>
        <StyledPrice>{price}</StyledPrice>
      </StyledFooter>
      <StyledButton buttonType={BUTTON_TYPES.INVERTED} onClick={onAddToProduct}>
        Add to cart
      </StyledButton>
    </StyledContainer>
  );
};

export default ProductCard;

const StyledButton = styled(Button)({
  width: "80%",
  opacity: "0.7",
  position: "absolute",
  top: "255px",
  display: "none",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "95%",
  objectFit: "cover",
  marginBottom: "5px",
  borderRadius: "5px 5px 0 0",
});

const StyledContainer = styled("div")({
  width: "100%",
  height: "350px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  "&: hover": {
    [StyledButton]: {
      opacity: "0.85",
      display: "flex",
    },
    [StyledImage]: {
      opacity: "0.8",
    },
  },
});

const StyledFooter = styled("div")({
  width: "100%",
  height: "5%",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "18px",
});

const StyledName = styled("span")({
  width: "90%",
  marginBottom: "15px",
});

const StyledPrice = styled("span")({
  width: "10%",
});
