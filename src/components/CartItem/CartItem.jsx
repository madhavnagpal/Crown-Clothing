import {
  CartItemContainer,
  ItemAvatar,
  ItemDetails,
  ItemName,
} from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <ItemAvatar src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
