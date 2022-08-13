import { TableCell, TableRow, IconButton } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useDispatch } from "react-redux";
import { incrementItemQuantity, decrementItemQuantity, deleteItemFromCart  } from "../store/cart/cart.action";

const imageContainerStyles = {
  width: "23%",
  paddingRight: "15px",
  "& img": {
    width: "100%",
    height: "100%",
    borderRadius: "3px",
  },
};

const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const onAdd = () => dispatch(incrementItemQuantity(cartItem));
  const onSubtract = () => dispatch(decrementItemQuantity(id));
  const onDelete = () => dispatch(deleteItemFromCart(id));

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell sx={imageContainerStyles}>
        <img src={imageUrl} alt={name} />
      </TableCell>

      <TableCell align="center">{name}</TableCell>

      <TableCell align="center">
        <IconButton color="primary" onClick={onSubtract}>
          <RemoveRoundedIcon />
        </IconButton>
        <span>{quantity}</span>
        <IconButton color="primary" onClick={onAdd}>
          <AddRoundedIcon />
        </IconButton>
      </TableCell>

      <TableCell align="center">{price}</TableCell>

      <TableCell align="center">
        <IconButton color="error" onClick={onDelete}>
          <DeleteRoundedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CheckoutItem;
