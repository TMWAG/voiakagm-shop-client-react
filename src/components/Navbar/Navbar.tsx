import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { navLinkRoutes } from '../../common/routes/navLinkRoutes';
import NavLinkWrapper from './NavLinkWrapper/NavLinkWrapper';

const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      {navLinkRoutes.map((r) => (
        <NavLink
          to={r.to}
          key={r.to}
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          <NavLinkWrapper>{r.content}</NavLinkWrapper>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
