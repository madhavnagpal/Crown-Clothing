import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "@emotion/styled/macro";

import CartIcon from "../components/CartIcon";
import CartDropdown from "../components/CartDropdown";
import { UserContext } from "../contexts/user.context";
import { signOutUser } from "../utils/firebase.utils";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const [cartDropdownAnchorEl, setCartDropdownAnchorEl] = useState(null);

  const onCartDropdownOpen = (event) => {
    setCartDropdownAnchorEl(event.currentTarget);
  };

  const onCartDropdownClose = () => setCartDropdownAnchorEl(null);

  return (
    <>
      <NavigationBar>
        <LogoLink to="/">
          <CrownLogo />
        </LogoLink>
        <NavLinksContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/shop">Shop</StyledLink>

          {currentUser ? (
            <StyledBox onClick={signOutUser}>Sign Out</StyledBox>
          ) : (
            <StyledLink to="/auth">Sign In</StyledLink>
          )}
          <CartIcon onClick={onCartDropdownOpen} />
        </NavLinksContainer>
        <CartDropdown
          anchorEl={cartDropdownAnchorEl}
          onClose={onCartDropdownClose}
        />
      </NavigationBar>
      <Outlet />
    </>
  );
};

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

const StyledLink = styled(Link)({
  padding: "10px 15px",
  cursor: "pointer",
});

const StyledBox = styled(Box)({
  padding: "10px 15px",
  cursor: "pointer",
});
