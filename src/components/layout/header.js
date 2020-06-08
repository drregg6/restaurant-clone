import React from 'react';
import styles from './header.module.scss';

import Nav from './nav';

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <p>More content</p>
    </header>
  )
}

export default Header;