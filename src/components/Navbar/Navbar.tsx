import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavbar } from './Styled/StyledNavbar';
import { StyledNavLinkWrapper } from './Styled/StyledNavLinkWrapper';
import { navLinkRoutes } from '../../common/routes/navLinkRoutes';

const Navbar = (): JSX.Element => {
  return (
    <StyledNavbar>
      {navLinkRoutes.map((r) => (
        <NavLink to={r.to} key={r.to}>
          <StyledNavLinkWrapper>{r.content}</StyledNavLinkWrapper>
        </NavLink>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
