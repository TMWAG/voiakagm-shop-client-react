import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavbarUserGroup from "./NavbarUserGroup/NavbarUserGroup";

const StyledNavbar = styled.nav`
  margin-top: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aqua;
  height: fit-content;
  >a {
    margin: auto .5vw;
    text-decoration: none;
  }
  >a.active {
    color: gold
  }
`;

const StyledNavLinkWrapper = styled.div`
  padding: 1vh 0;
`;

const StyledLogo = styled.img`

`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to='/'>
        <StyledLogo src="https://placehold.co/90" alt="logo" />
      </NavLink>
      <NavLink to='/catalogue'>
        <StyledNavLinkWrapper>Каталог</StyledNavLinkWrapper>
      </NavLink>
      <NavLink to='/sales'>
        <div>Скидки</div>
      </NavLink>
      <NavLink to='/recommendations'>
        <div>Рекомендации</div>
      </NavLink>
      <NavbarUserGroup/>
    </StyledNavbar>
  );
};

export default Navbar;