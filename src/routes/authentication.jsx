import { Box } from "@mui/material";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import styled from "@emotion/styled/macro";

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
