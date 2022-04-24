import { Box } from "@mui/material";
import styled from "@emotion/styled/macro";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Authentication = () => (
  <WrappingContainer>
    <SignIn />
    <SignUp />
  </WrappingContainer>
);

export default Authentication;

const WrappingContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "900px",
  margin: "30px auto",
});
