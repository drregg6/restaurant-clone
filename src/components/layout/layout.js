import React from 'react';
import styles from './layout.module.scss';

import Nav from './nav';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Nav />
        <Header />
        <div className={styles.main}>
          { props.children }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;