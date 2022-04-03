import { Outlet, Link } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "@emotion/styled/macro";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";

const Navigation = () => (
  <>
    <NavigationBar>
      <LogoLink to="/">
        <CrownLogo />
      </LogoLink>
      <NavLinksContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/auth">Sign In</NavLink>
      </NavLinksContainer>
    </NavigationBar>
    <Outlet />
  </>
);

export default Navigation;

const NavigationBar = styled(Box)({
  height: "70px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "25px",
});

const LogoLink = styled(Link)({
  height: "100%",
  width: "70px",
  padding: "25px",
});

const NavLinksContainer = styled(Box)({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

const NavLink = styled(Link)({
  padding: "10px 15px",
  cursor: "pointer",
});
