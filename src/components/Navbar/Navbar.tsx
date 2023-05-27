import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  margin: 1vh 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aqua;
  >a {
    color: black;
    margin: 0 .5vw;
    text-decoration: none;
  }
  >a.active {
    color: gold
  }
`;

const StyledNavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  :hover {
    color: red;
  }
`;

const StyledLogo = styled.img`
  border-radius: 15px;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to='/'>
        <StyledNavLinkWrapper>
          <StyledLogo src="https://placehold.co/90x90" alt="logo" />
        </StyledNavLinkWrapper>
      </NavLink>
      <NavLink to='/guarantees'>
        <StyledNavLinkWrapper>Гарантии</StyledNavLinkWrapper>
      </NavLink>
      <NavLink to='/sales'>
        <StyledNavLinkWrapper>Скидки</StyledNavLinkWrapper>
      </NavLink>
      <NavLink to='/delivery_info'>
        <StyledNavLinkWrapper>Доставка</StyledNavLinkWrapper>
      </NavLink>
      <NavLink to='/recommendations'>
        <StyledNavLinkWrapper>Рекомендации</StyledNavLinkWrapper>
      </NavLink>
      <NavLink to='/cart'>
        <StyledNavLinkWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
          <span>Корзина</span> 
        </StyledNavLinkWrapper>
      </NavLink>
      <NavLink to='/user'>
        <StyledNavLinkWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
          </svg>
          <span>Личный кабинет/Войти</span>
        </StyledNavLinkWrapper>
      </NavLink>
    </StyledNavbar>
  );
};

export default Navbar;