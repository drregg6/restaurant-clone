import React from 'react';
import {
  Link
} from 'gatsby';
import styles from './nav.module.scss';

const Nav = ({ title }) => {
  return (
    <div className={`${styles.nav}`}>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <ul className={`${styles.links}`}>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#menu">Menu</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
        <li>
          <Link to="/#gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;