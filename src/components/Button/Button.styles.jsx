import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled/macro";

const BaseButton = styled(MuiButton)({
  minWidth: "165px",
  height: "50px",
  boxSizing: "border-box",
  letterSpacing: "0.5px",
  lineHeight: "50px",
  padding: "0 35px",
  fontSize: "15px",
  textTransform: "none",
  fontWeight: "bolder",
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    border: "1.5px solid black",
  },
});

const GoogleSignInButton = styled(BaseButton)({
  backgroundColor: "#4285f4",
  color: "white",
  "&:hover": {
    backgroundColor: "#357ae8",
  },
});

const InvertedButton = styled(BaseButton)({
  backgroundColor: "white",
  color: "black",
  border: "1.5px solid black",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
});

export { BaseButton, GoogleSignInButton, InvertedButton };
