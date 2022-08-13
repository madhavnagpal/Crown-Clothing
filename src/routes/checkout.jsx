import { useSelector } from "react-redux";
import styled from "@emotion/styled/macro";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import CheckoutItem from "../components/CheckoutItem";
import { selectCartItems, selectCartTotal } from "../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <StyledCheckoutContainer>
      <h1>Cart Items</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledHeaderCell align="center">Product</StyledHeaderCell>
              <StyledHeaderCell align="center">Description</StyledHeaderCell>
              <StyledHeaderCell align="center">Quantity</StyledHeaderCell>
              <StyledHeaderCell align="center">Price</StyledHeaderCell>
              <StyledHeaderCell align="center">Actions</StyledHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(cartItems).map(([productId, cartItem]) => (
              <CheckoutItem key={productId} cartItem={cartItem} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledTotal>Total: ${cartTotal}</StyledTotal>
    </StyledCheckoutContainer>
  );
};

export default Checkout;

const StyledCheckoutContainer = styled("div")({
  width: "55%",
  minHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  "& h1": {
    padding: "0",
    margin: "0",
    marginBottom: "24px",
  },
});

const StyledHeaderCell = styled(TableCell)({
  fontSize: "16px",
  fontWeight: "bold",
});

const StyledTotal = styled("div")({
  margin: "30px 0 0 auto",
  fontSize: "36px",
});
