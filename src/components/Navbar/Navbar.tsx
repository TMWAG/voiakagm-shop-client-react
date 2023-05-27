import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavbarUserGroup from "./NavbarUserGroup/NavbarUserGroup";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aqua;
  height: 5vh;
  >a {
    margin: auto .5vw;
    text-decoration: none;
  }
  >a.active {
    color: gold
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to='/'>
        <div>logo</div>
      </NavLink>
      <NavLink to='/catalogue'>
        <div>Каталог</div>
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