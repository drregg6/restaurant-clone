import React from 'react';
import { Link } from 'gatsby';
import styles from './nav.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const Nav = () => {
  return (
    <div className={`${utilStyles.ptb1} ${utilStyles.center} ${styles.nav}`}>
      <Link to="/">
        <h1>Gatsby</h1>
      </Link>
      <ul className={`${styles.links}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;