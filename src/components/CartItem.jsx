import styled from "@emotion/styled/macro";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <StyledCartItemContainer>
      <StyledImage src={imageUrl} alt={name} />
      <StyledItemDetails>
        <StyledName>{name}</StyledName>
        <span>
          {quantity} x ${price}
        </span>
      </StyledItemDetails>
    </StyledCartItemContainer>
  );
};

export default CartItem;

const StyledCartItemContainer = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  minHeight: "80px",
  marginBottom: "15px",
});

const StyledImage = styled("img")({
  width: "30%",
  borderRadius: "3px",
});

const StyledItemDetails = styled("div")({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "10px 20px",
});

const StyledName = styled("span")({
  fontSize: "16px",
});
