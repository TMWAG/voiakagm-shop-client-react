import React from 'react';
import styles from './NavLinkWrapper.module.css';

const NavLinkWrapper = ({
  children,
}: {
  children: string | JSX.Element;
}): JSX.Element => {
  return <div className={styles.navLinkWrapper}>{children}</div>;
};

export default NavLinkWrapper;
