import React from 'react';
import styles from './header.module.scss';
import {
  graphql,
  useStaticQuery
} from 'gatsby';
import SplashImage from '../../images/intro-bg.jpg';
import Nav from './nav';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  return (
    <header className={styles.header} style={{
      background: `rgba(0,0,0,0.35) url(${SplashImage})`,
      backgroundBlendMode: 'darken',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <Nav title={title} />
      <div className={styles.content}>
        <h1>{title}</h1>
        <h2>All Halal / Only Halal / Always Halal</h2>
        <p>215 530 0440</p>
        <button>Discover Story</button>
      </div>
    </header>
  )
}

export default Header;